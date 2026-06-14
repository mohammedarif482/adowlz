import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/content";
import { TrackedLink } from "@/components/TrackedLink";

export function WhatsAppButton() {
  const phoneDigits = siteConfig.contact.phone.replace(/\D/g, "");
  const message = "Hello ADOWLZ — I'd like to know more about your services.";
  const href = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

  return (
    <TrackedLink
      kind="whatsapp"
      source="floating_button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-neutral-800 text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 hover:bg-neutral-700 sm:right-6 sm:h-14 sm:w-14 bottom-24 sm:bottom-6"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
    </TrackedLink>
  );
}
