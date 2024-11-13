import Logo from "./logo";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

// In real-world scenario, these data should be fetched from a CMS/database
const services = [
  "User Reasearch",
  "Design Systems",
  "Rebranding",
  "Marketing",
  "Market Reasearch",
  "User Journey",
];
const sitemap = ["Home", "About", "Showcase", "Blog", "About Us", "Contact Us"];

export function Footer() {
  return (
    <footer className="bg-brand-text-strong py-12 text-center space-y-12">
      <Logo theme="dark" className="text-4xl" />
      <div className="container flex justify-between font-lato">
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
      </div>
      <div className="flex justify-center space-x-2">
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
        &copy; {new Date().getFullYear()} designmatters. <br /> All rights
        reserved.
      </p>
    </footer>
  );
}
