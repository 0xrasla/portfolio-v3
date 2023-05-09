import "./globals.scss";
import Navebar from "@/components/Navebar";

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
      <body className={`font-heading overflow-x-hidden w-screen`}>
        {/* <Navebar /> */}
        {children}
      </body>
    </html>
  );
}
