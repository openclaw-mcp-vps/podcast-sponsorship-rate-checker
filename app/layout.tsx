import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Podcast Sponsorship Rate Checker",
  description: "Check if you're paying fair podcast ad rates. Compare sponsorship rates across similar shows by audience size, engagement, and niche."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="288c5479-82aa-475e-9c4d-686bd9544504"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
