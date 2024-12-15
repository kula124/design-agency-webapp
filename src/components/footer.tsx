import { getNavigation } from "@/lib/api";
import Logo from "./logo";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// In real-world scenario, these data should be fetched from a CMS/database
const services = [
  "User Reasearch",
  "Design Systems",
  "Rebranding",
  "Marketing",
  "Market Research",
  "User Journey",
];

export async function Footer() {
  const pages = await getNavigation();
  const sitemap = pages
    .filter((page) => page.includeInProd)
    .map((page) => page.title);

  return (
    <footer className="bg-brand-text-strong py-12 text-center space-y-12">
      <Logo theme="dark" className="md:hidden text-4xl" />
      <div className="container flex justify-between font-lato">
        <div className="hidden md:flex flex-col space-y-2 items-start">
          <Logo theme="dark" className="text-2xl" />
          <p className="text-brand-stroke-weak font-serif leading-6 italic max-w-[200px] text-left">
            {`Design is not just what it looks like and feels like. It's how it
            works.`}
          </p>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h4 className="text-xl font-black text-brand-stroke-weak">
            Services
          </h4>
          {services.map((service, index) => (
            <span className="text-brand-stroke-weak" key={index}>
              {service}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-start space-y-2">
          <h4 className="text-xl font-black text-brand-stroke-weak">Sitemap</h4>
          {sitemap.map((page, index) => (
            <span className="text-brand-stroke-weak" key={index}>
              {page}
            </span>
          ))}
        </div>

        <div className="hidden md:flex flex-col items-start space-y-2">
          <h4 className="text-xl font-black text-brand-stroke-weak">
            Contact Us
          </h4>
          <div className="space-y-8">
            <div className="text-brand-stroke-weak space-y-2 text-left">
              <p>Ruđera Boškovića 32</p>
              <p>21000 Split, Croatia</p>
            </div>
            <div className="text-brand-stroke-weak space-y-2 text-left">
              <p className="flex items-baseline gap-3">
                <FaPhone /> +385 123 0000
              </p>
              <p className="flex gap-3">
                <MdEmail size="20px" />
                design@fesb.hr
              </p>
            </div>
            <div className="flex justify-center space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="text-brand-stroke-weak text-4xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="text-brand-stroke-weak text-4xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-brand-stroke-weak text-4xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="text-brand-stroke-weak text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-center space-x-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="text-brand-stroke-weak text-4xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className="text-brand-stroke-weak text-4xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-brand-stroke-weak text-4xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="text-brand-stroke-weak text-4xl" />
        </a>
      </div>
      <p className="text-brand-stroke-strong">
        &copy; {new Date().getFullYear()} designmatters.{" "}
        <br className="md:hidden" /> All rights reserved.
      </p>
    </footer>
  );
}
