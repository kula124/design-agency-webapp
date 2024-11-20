import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import { db } from "@/db/drizzle";
import { pages } from "@/db/schema";

async function getData() {
  const data = await db.select().from(pages);
  return data;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["arial", "sans-serif"],
});

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  fallback: ["arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | designmatters.",
    default: "designmatters.",
  },
  description: "A design agency that cares about your business.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch data from the database
  const data = await getData();
  console.log(data);

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} antialiased bg-brand-fill text-base`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
