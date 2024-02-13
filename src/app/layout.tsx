import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./ui/navbar";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Gasper's portfolio",
  description: "this is my portfolio. I am a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="border rounded flex justify-center gap-9 items-center mx-auto max-w-screen-md m-4 h-14 bg-black sticky top-0">
            <Nav />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
