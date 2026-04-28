import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { site } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-script",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.title || `${site.shortName} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "thiết kế website",
    "thiết kế app",
    "phát triển phần mềm",
    "AI",
    "chuyển đổi số",
    "homenest",
    "homenest việt nam",
  ],
  openGraph: {
    title: site.title || `${site.shortName} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "vi_VN",
    siteName: site.shortName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${manrope.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
