import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Font optimization for better CLS - shows fallback immediately
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  adjustFontFallback: true, // Reduces CLS by matching fallback metrics
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ionesecurity.co.kr"),
  title: {
    default: "아이원 시큐리티",
    template: "%s | 아이원 시큐리티",
  },
  description: "데이터 보안은 아이원 시큐리티와 함께",
  keywords: ["보안", "안랩", "ahnlab", "데이터보안", "바이러스", "v3"],
  openGraph: {
    title: "아이원 시큐리티",
    description: "데이터 보안은 아이원 시큐리티와 함께",
    url: "https://ionesecurity.co.kr",
    siteName: "아이원 시큐리티",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/img/logo.png",
        width: 800,
        height: 600,
        alt: "아이원 시큐리티 로고",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "아이원 시큐리티",
    description: "데이터 보안은 아이원 시큐리티와 함께",
    images: ["/img/logo.png"],
  },
  icons: {
    icon: "/img/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://my.spline.design" />
        <link rel="dns-prefetch" href="https://my.spline.design" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}