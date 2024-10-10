import type { Metadata } from "next";
import "./globals.css";

// ... rest of the file remains the same
export const metadata: Metadata = {
  title: "Flight Search",
  description: "Search for flights across multiple airports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}