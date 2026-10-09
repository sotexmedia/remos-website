import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, #1b3f7a 0%, #071426 70%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: "#438bff" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#70aaff", textTransform: "uppercase" }}>{site.tagline}</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            Your entire media business. One powerful platform.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#9dafc5" }}>Booking · Scheduling · Production · Delivery · Payments</div>
      </div>
    ),
    size,
  );
}
