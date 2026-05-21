import { siteConfig } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactInput = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  projectType?: string;
};

function validate(
  body: unknown
): { ok: true; data: ContactInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request body." };
  const { name, email, message, phone, projectType } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2 || name.length > 120) {
    return { ok: false, error: "Please enter your name." };
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 200) {
    return { ok: false, error: "Please enter a valid email." };
  }
  if (typeof message !== "string" || message.trim().length < 5 || message.length > 5000) {
    return { ok: false, error: "Message must be between 5 and 5000 characters." };
  }

  const data: ContactInput = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  if (typeof phone === "string" && phone.trim().length > 0) {
    if (phone.length > 60) return { ok: false, error: "Phone number is too long." };
    data.phone = phone.trim();
  }
  if (typeof projectType === "string" && projectType.trim().length > 0) {
    if (projectType.length > 120) return { ok: false, error: "Project type is too long." };
    data.projectType = projectType.trim();
  }

  return { ok: true, data };
}

function formatBody(input: ContactInput): string {
  const lines = [
    `From: ${input.name} <${input.email}>`,
    input.phone ? `Phone: ${input.phone}` : null,
    input.projectType ? `Project: ${input.projectType}` : null,
    "",
    input.message,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

async function sendViaResend(
  input: ContactInput
): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL not set — logging submission instead of sending."
    );
    console.info(`[contact] submission: ${JSON.stringify(input)}`);
    return { ok: true };
  }

  const subjectSuffix = input.projectType ? ` (${input.projectType})` : "";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: input.email,
      subject: `New enquiry from ${input.name}${subjectSuffix}`,
      text: formatBody(input),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { ok: false, error: `Mail provider rejected the request: ${res.status} ${detail}` };
  }
  return { ok: true };
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ success: false, error: "Body must be valid JSON." }, { status: 400 });
  }

  const v = validate(payload);
  if (!v.ok) return Response.json({ success: false, error: v.error }, { status: 400 });

  const result = await sendViaResend(v.data);
  if (!result.ok) return Response.json({ success: false, error: result.error }, { status: 502 });

  return Response.json({ success: true });
}

export function GET() {
  return Response.json({ success: false, error: "Method Not Allowed" }, { status: 405 });
}
