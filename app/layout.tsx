import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinematic VFX Architect",
  description:
    "Professional VFX pipeline breakdown generator blending Marathi narrative tone with English technical specifics."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <body>{children}</body>
    </html>
  );
}
