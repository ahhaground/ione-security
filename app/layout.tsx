import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I-ONE Security",
  description: "안랩 파트너사 I-ONE Security - 당신의 시간만큼 소중한 데이터 보안",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
