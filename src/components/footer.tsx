import Logo from "./logo";

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
    <footer className="bg-brand-text-strong py-8 text-center space-y-12">
      <Logo theme="dark" className="text-4xl" />
      <div className="container flex justify-between font-lato">
        <div className="flex flex-col items-start space-y-1">
          <h4 className="text-xl font-semibold text-brand-fill">Services</h4>
          {services.map((service, index) => (
            <span className="text-brand-fill" key={index}>
              {service}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-start space-y-1">
          <h4 className="text-xl font-semibold text-brand-fill">Sitemap</h4>
          {sitemap.map((page, index) => (
            <span className="text-brand-fill" key={index}>
              {page}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
