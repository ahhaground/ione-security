import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Font optimization for better CLS
  preload: true,
  variable: '--font-inter',
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
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}