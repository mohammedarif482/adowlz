"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-foreground/40 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const { formFields } = siteConfig.contactPage;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
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
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <span aria-hidden className="text-base leading-none">→</span>
        </button>

        {status === "success" ? (
          <p
            role="status"
            className="text-sm font-medium text-accent"
          >
            Thanks — we&rsquo;ll come back to you within two working days.
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
