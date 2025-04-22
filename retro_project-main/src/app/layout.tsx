import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyber80s",
  description: "Your ultimate destination for retro gaming and 80s-90s nostalgia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        <div className="scanlines"></div>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
