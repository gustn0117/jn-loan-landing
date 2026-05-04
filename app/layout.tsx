import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "제이앤대부 소액대출 | 신뢰할 수 있는 맞춤형 대출 상담",
  description:
    "다양한 신용 상황에서도 상담 가능합니다. 간편한 정보 입력으로 당신의 상황에 맞는 맞춤형 대출 상담을 받아보세요.",
  openGraph: {
    title: "제이앤대부 소액대출",
    description: "투명하고 신뢰할 수 있는 소액대출 상담 서비스",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
