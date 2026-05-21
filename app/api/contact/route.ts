import { siteConfig } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactInput = { name: string; email: string; message: string };

function validate(body: unknown): { ok: true; data: ContactInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request body." };
  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2 || name.length > 120) {
    return { ok: false, error: "Please enter your name." };
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 200) {
    return { ok: false, error: "Please enter a valid email." };
  }
  if (typeof message !== "string" || message.trim().length < 5 || message.length > 5000) {
    return { ok: false, error: "Message must be between 5 and 5000 characters." };
  }
  return { ok: true, data: { name: name.trim(), email: email.trim(), message: message.trim() } };
}

async function sendViaResend(input: ContactInput): Promise<{ ok: true } | { ok: false; error: string }> {
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
      subject: `New enquiry from ${input.name}`,
      text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
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
