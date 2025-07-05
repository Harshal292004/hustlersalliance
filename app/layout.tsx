import type { Metadata } from "next";
import ClientBody from "@/components/ClientBody";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Hustlers Alliance",
  description: "The way to discipline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-0 p-0 text-[#292929] dark:text-[#E9E5D8] bg-[#E9E5D8] dark:bg-[#292929] antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
