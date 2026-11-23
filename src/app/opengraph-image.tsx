import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Mahir Uslu, Senior Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const paper = "#f4efe6";
const ink = "#151413";
const muted = "#8b857b";
const accent = "#e0482e";

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
          background: paper,
          color: ink,
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: muted,
          }}
        >
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 200, lineHeight: 0.9, letterSpacing: -6 }}>Mahir</div>
          <div
            style={{
              fontSize: 200,
              lineHeight: 0.9,
              letterSpacing: -6,
              fontStyle: "italic",
              color: accent,
            }}
          >
            Uslu
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${muted}`,
            paddingTop: 24,
            fontSize: 28,
          }}
        >
          <span>React Native, web, and macOS products.</span>
          <span style={{ fontFamily: "monospace", fontSize: 22, color: muted }}>mahiruslu.com</span>
        </div>
      </div>
    ),
    size,
  );
}
