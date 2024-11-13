import Button from "@/components/ui/button";
import Image from "next/image";

// Here we hardcode the content of the home page, but in a real-world scenario, this content would be fetched from a CMS or a DB.
export default function Home() {
  return (
    <main className="pt-4 space-y-14">
      <section className="container space-y-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-lato font-black tracking-tight text-balance">
            Where Vision Meets Innovation
          </h1>
          <h4 className="text-xl font-lato text-brand-text-weak tracking-tight">
            Entrust us with your digital appearance
          </h4>
        </div>
        <p className="leading-6">
          We are a full-service digital agency that specializes in web design,
          development, and digital marketing. We create digital experiences that
          are unique to your brand and help you achieve your goals.
        </p>
        <Button secondary>Book a meeting</Button>
      </section>

      <section className="space-y-4">
        <h1 className="container text-3xl font-lato font-bold tracking-tight text-balance">
          Grow Your Business With Us
        </h1>
        <div className="w-full h-[390px] relative">
          <Image
            src="/images/grow_business.png"
            alt="Grow your business"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        <div className="container space-y-6">
          <h4 className="text-xl font-lato text-brand-text-weak tracking-tight">
            Beautify your website and brand
          </h4>
          <p className="leading-6">
            First impressions last forever. When someone lands on your website,
            what do you think their instinctive, gut reaction will be? When a
            user visits your website, the first thing they notice is the look
            (design) and feel (UX).
          </p>
          <Button
            ghost
            className="border-none uppercase text-brand-primary px-0"
            iconClassName="w-4 h-4"
          >
            Get in touch
          </Button>
        </div>
      </section>
    </main>
  );
}
