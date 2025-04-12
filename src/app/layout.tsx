import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Analytics from "@/components/analytics";
const interDisplay = localFont({
  src: [
    {
      path: "/fonts/InterDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/InterDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "/fonts/InterDisplay-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});
export const metadata: Metadata = {
  title: "Tanmay",
  description: "Explore Tanmay's profile — projects.",
  openGraph: {
    title: "Tanmay | Profile",
    description: "Explore Tanmay's profile — projects.",
    url: "https://tanmay.xyz/", 
    siteName: "Tanmay's Portfolio",
    images: [
      {
        url: "https://tanmay.b-cdn.net/gradii-1600x900.png", 
        width: 1200,
        height: 630,
        alt: "Tanmay Profile Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay | Profile",
    description: "Explore Tanmay's profile — projects.",
    images: ["https://tanmay.b-cdn.net/gradii-1600x900.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-adsense-account"
        content="ca-pub-3571368045542455"
      ></meta>
      <body className={`${interDisplay.className} dark `}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
