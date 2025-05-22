import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wheelzy",
  description: "A car rental Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          <div className="min-h-screen">
            <SignedIn>
              <NavBar />
              <main>{children}</main>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-md w-full p-6">
                  <SignIn />
                  <div className="clerk-sign-in" />
                </div>
              </div>
            </SignedOut>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
