import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "utdbuildspace",
  description: "The hub for UTD student builders. Chase ideas. Ship projects. Build startups.",
  keywords: ["UTD", "University of Texas at Dallas", "builders", "startups", "students", "alumni", "projects", "entrepreneurship"],
  authors: [{ name: "UTDBuildSpace Team" }],
  creator: "UTDBuildSpace",
  publisher: "UTDBuildSpace",
  openGraph: {
    title: "utdbuildspace",
    description: "The hub for UTD student builders. Chase ideas. Ship projects. Build startups.",
    url: "/",
    siteName: "UTDBuildSpace",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UTDBuildSpace Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "utdbuildspace",
    description: "The hub for UTD student builders. Chase ideas. Ship projects. Build startups.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}