"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import { trackContactFormSubmit } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-foreground/40 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const { formFields } = siteConfig.contactPage;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);
    try {
      const name = (data.get("name") ?? "").toString().trim();
      const email = (data.get("email") ?? "").toString().trim();
      const phone = (data.get("phone") ?? "").toString().trim();
      const projectType = (data.get("projectType") ?? "").toString().trim();
      const detail = (data.get("message") ?? "").toString().trim();

      const intro = projectType
        ? `Hey, I'm *${name}*. I'd like to start a conversation about a new project — *${projectType}*.`
        : `Hey, I'm *${name}*. I'd like to start a conversation about a new project.`;

      const contactLines = [email, phone].filter(Boolean).join("\n");

      const sections = [
        intro,
        detail ? `*Project Brief:*\n${detail}` : "",
        contactLines,
        "Looking forward to hearing from you.",
      ].filter(Boolean);

      const message = sections.join("\n\n");
      const phoneDigits = siteConfig.contact.phone.replace(/\D/g, "");
      const url = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank", "noopener,noreferrer");
      trackContactFormSubmit({
        projectType: projectType || undefined,
        hasPhone: Boolean(phone),
        hasMessage: Boolean(detail),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-surface p-8 sm:p-10"
    >
      <div className="grid gap-5">
        {formFields.map((field) => {
          const id = `contact-${field.name}`;
          const required = "required" in field ? field.required : false;
          return (
            <div key={field.name} className="flex flex-col gap-2">
              <label
                htmlFor={id}
                className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70"
              >
                {field.label}
                {required ? <span className="ml-1 text-accent">*</span> : null}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  required={required}
                  rows={"rows" in field ? field.rows : 5}
                  placeholder={"placeholder" in field ? field.placeholder : undefined}
                  className={cn(inputClass, "resize-y")}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  required={required}
                  defaultValue=""
                  className={cn(inputClass, "appearance-none")}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {"options" in field
                    ? field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))
                    : null}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  required={required}
                  placeholder={"placeholder" in field ? field.placeholder : undefined}
                  autoComplete={
                    field.type === "email"
                      ? "email"
                      : field.type === "tel"
                        ? "tel"
                        : field.name === "name"
                          ? "name"
                          : "off"
                  }
                  className={inputClass}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-gradient px-7 text-base font-medium text-accent-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <span aria-hidden className="text-base leading-none">→</span>
        </button>

        {status === "success" ? (
          <p
            role="status"
            className="text-sm font-medium text-accent"
          >
            Opening WhatsApp — please tap send to share your details with us.
          </p>
        ) : null}

        {status === "error" && error ? (
          <p role="alert" className="text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
