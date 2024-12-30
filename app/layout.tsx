import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventsProvider } from "@/contexts/EventsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lebanese Youth Foundation",
  description: "Lebanese Youth Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="LYF" />
        <meta name="application-name" content="LYF" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Lebanese Youth Foundation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="mx-auto">
          <EventsProvider>
            {children}
          </EventsProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
