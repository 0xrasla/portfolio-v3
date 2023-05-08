import './globals.css'
import { Crimson_Pro } from "next/font/google";

const crimson = Crimson_Pro({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rasla - Home",
  description:
    "Its my portfolio. my name is rasla and i am a web developer based in india",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={crimson.className}>{children}</body>
    </html>
  );
}
