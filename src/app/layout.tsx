import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Song_Myung } from "next/font/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const songMyung = Song_Myung({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "solarClear",
  description: "solarClear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${songMyung.className} antialiased`}
      >
        <SidebarProvider className="block" defaultOpen={false}>
          <div className="relative h-screen">
            <div className="fixed top-0 left-0 z-50">
              <AppSidebar />
            </div>
            <main>{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
