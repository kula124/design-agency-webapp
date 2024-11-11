"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

type Page = {
  title: string;
  path: `/${string}`;
};

// We hardcode pages here, but you could get this information from some external source (e.g. CMS, DB, config file, etc).
const pages: Page[] = [
  { title: "Home", path: "/" },
  {
    title: "Showcase",
    path: "/showcase",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          page.path === "/"
            ? pathname === page.path
              ? "font-extrabold"
              : ""
            : pathname.startsWith(page.path)
            ? "font-extrabold"
            : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

function Hamburger() {
  return (
    <button
      className="flex md:hidden flex-col justify-center items-end w-11 h-11 p-2 space-y-1.5 rounded-sm hover:bg-brand-stroke-weak active:bg-brand-stroke-weak"
      aria-label="Open menu"
    >
      <span className="w-7 h-1 bg-brand-black rounded-full" />
      <span className="w-4 h-1 bg-brand-black rounded-full" />
      <span className="w-6 h-1 bg-brand-black rounded-full" />
    </button>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="py-8 border-b border-brand-stroke-weak">
      <div className="container flex justify-between">
        <Link href="/">
          <Logo className="text-2xl" />
        </Link>
        <ul className="hidden md:flex justify-center space-x-4">
          {pages.map((page, index) => processPage(page, index, pathname))}
        </ul>
        <Hamburger />
      </div>
    </nav>
  );
}
