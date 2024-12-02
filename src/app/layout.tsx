import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getMainNavigation, getUser } from "@/lib/api";

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
  // Fetch data from Contentful
  const data = await getMainNavigation();
  const pages = data.fields.navItems
    ?.map((navItem) => navItem?.fields)
    .filter((navItem) => navItem !== undefined);

  const bob = await getUser("bob@example.com");

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} antialiased bg-brand-fill text-base min-h-svh flex flex-col`}
      >
        <Navigation pages={pages} />
        {bob && (
          <div className="container py-10 text-lg text-red-500">
            Welcome, {bob.name}!
          </div>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
