import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const alt = `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const bone = "#f7f5f1";
  const ink = "#0b0b0d";
  const muted = "#6b6b73";
  const accent = siteConfig.brand.color;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bone,
          color: ink,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: accent,
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
            {siteConfig.brand.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              color: muted,
              textTransform: "uppercase",
              letterSpacing: 4,
              marginBottom: 24,
            }}
          >
            {siteConfig.hero.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            <div style={{ display: "flex" }}>Where creativity thrives&nbsp;</div>
            <div style={{ display: "flex", color: accent }}>
              under the stars.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: muted,
          }}
        >
          <div style={{ display: "flex" }}>
            {siteConfig.contact.locations.join("  ·  ")}
          </div>
          <div style={{ display: "flex" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
