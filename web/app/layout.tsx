import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteConfig } from '@/config/site';
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import AuthProvider from './provider/AuthProvider';
import ReactQueryClientProvider from './provider/ReactQueryClientProvider';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <ReactQueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              {children}
            </ThemeProvider>
          </ReactQueryClientProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
