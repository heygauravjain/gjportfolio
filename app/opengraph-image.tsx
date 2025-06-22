import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = `${DATA.name} - ${DATA.work[0].title}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "900px",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
          style={
            {
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #fff 0%, #e2e8f0 100%)",
              backgroundClip: "text",
              webkitBackgroundClip: "text",
              color: "transparent",
            } as React.CSSProperties & { webkitBackgroundClip?: string }
          }
        >
          {DATA.name}
        </div>
        <div
          style={{
            fontSize: "36px",
            marginBottom: "30px",
            opacity: 0.9,
          }}
        >
          {DATA.work[0].title}
        </div>
        <div
          style={{
            fontSize: "24px",
            opacity: 0.8,
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          {DATA.description}
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
