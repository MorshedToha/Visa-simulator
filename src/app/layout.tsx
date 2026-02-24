import type { Metadata } from "next";
// Make sure this path matches where your globals.css is located!
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Acceptance AI | Visa Simulator",
  description: "Practice your visa interview with realistic AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0f1e] text-white">
        {children}
      </body>
    </html>
  );
}