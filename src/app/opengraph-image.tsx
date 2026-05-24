import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Mahir Uslu Senior Frontend Developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f2e8",
          color: "#0b0f10",
          padding: 64,
          border: "18px solid #0b0f10",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 136,
              lineHeight: 0.88,
              fontWeight: 900,
              letterSpacing: -4,
            }}
          >
            Mahir Uslu
          </div>
          <div
            style={{
              maxWidth: 880,
              fontSize: 34,
              lineHeight: 1.2,
              color: "#1d272a",
            }}
          >
            React, React Native, TypeScript, Next.js, and mobile product
            experiences.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          <span
            style={{
              background: "#b7ff3c",
              border: "4px solid #0b0f10",
              padding: "12px 18px",
            }}
          >
            {profile.currentCompany}
          </span>
          <span
            style={{
              background: "#ff4f3f",
              color: "#f7f2e8",
              border: "4px solid #0b0f10",
              padding: "12px 18px",
            }}
          >
            mahiruslu.me
          </span>
        </div>
      </div>
    ),
    size,
  );
}
