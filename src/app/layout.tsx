import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomazingplus2.rogerherb.com"),
  title: {
    default: "Tomazing Plus2 - ผลิตภัณฑ์รักษาต่อมลูกหมากโต ด้วยสารสกัดไลโคปีน",
    template: "%s | Tomazing Plus2",
  },
  description:
    "Tomazing Plus2 ผลิตภัณฑ์จากงานวิจัยสารสกัดไลโคปีนจากมะเขือเทศ 9 รางวัลระดับโลก ช่วยบรรเทาอาการต่อมลูกหมากโต ปัสสาวะบ่อย ปัสสาวะไม่สุด ปลอดภัย 100%",
  keywords: [
    "ต่อมลูกหมากโต",
    "รักษาต่อมลูกหมาก",
    "Tomazing Plus",
    "ไลโคปีน",
    "Lycopene",
    "ปัสสาวะบ่อย",
    "ปัสสาวะไม่สุด",
    "สมุนไพร",
    "ผลิตภัณฑ์เสริมอาหาร",
  ],
  authors: [{ name: "Tomazing Plus2" }],
  creator: "Tomazing Plus2",
  publisher: "Tomazing Plus2",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://tomazingplus2.rogerherb.com",
    siteName: "Tomazing Plus2",
    title: "Tomazing Plus2 - ผลิตภัณฑ์รักษาต่อมลูกหมากโต",
    description:
      "ผลิตภัณฑ์จากงานวิจัยไลโคปีน 9 รางวัลระดับโลก ช่วยบรรเทาอาการต่อมลูกหมากโต",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tomazing Plus2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomazing Plus2 - ผลิตภัณฑ์รักษาต่อมลูกหมากโต",
    description:
      "ผลิตภัณฑ์จากงานวิจัยไลโคปีน 9 รางวัลระดับโลก ช่วยบรรเทาอาการต่อมลูกหมากโต",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="canonical" href="https://tomazingplus2.rogerherb.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tomazing Plus2",
              url: "https://tomazingplus2.rogerherb.com",
              logo: "https://tomazingplus2.rogerherb.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+66-636294452",
                contactType: "sales",
                availableLanguage: "Thai",
              },
            }),
          }}
        />
      </head>
      <body className={`${notoSansThai.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
