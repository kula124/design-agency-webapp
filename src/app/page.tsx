import Button from "@/components/ui/button";
import Image from "next/image";

// Here we hardcode the content of the home page, but in a real-world scenario, this content would be fetched from a CMS or a DB.
const heroImages = [
  "/images/pierre_chatel_unsplash.jpg",
  "/images/alex_padurariu_unsplash.jpg",
  "/images/matt_unsplash.jpg",
  "/images/yoann_siloine_unsplash.jpg",
];

const testimonials = [
  {
    image: "/images/design_system.jpg",
    buttonText: "Design system",
  },
  {
    image: "/images/from_scratch.jpg",
    buttonText: "Design from scratch",
  },
  {
    image: "/images/brand_transform.jpg",
    buttonText: "Brand transformation",
  },
  {
    image: "/images/book_cover.jpg",
    buttonText: "Book cover design",
  },
];

type HeroImageGridProps = {
  images: string[];
};

function HeroImageGrid({ images }: HeroImageGridProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 grow">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative md:h-44 md:w-44 lg:h-48 lg:w-48 xl:h-52 xl:w-52"
        >
          <Image
            priority
            src={image}
            alt={`Hero image ${index + 1}`}
            fill
            sizes="33vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ))}
    </div>
  );
}

type TestimonialProps = {
  image: string;
  buttonText: string;
};

function Testimonial({ image, buttonText }: TestimonialProps) {
  return (
    <div className="border">
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          alt="Design system"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="container py-4 bg-white">
        <Button
          ghost
          className="border-none uppercase text-brand-primary px-0 w-full max-w-full justify-between bg-white"
          iconClassName="w-4 h-4"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="pt-4 space-y-14">
      {/* Hero */}
      <section className="container space-y-6 space-x-4 md:flex md:justify-between">
        <div className="flex flex-col justify-center gap-8 md:max-w-md">
          <div className="space-y-1">
            <h1 className="text-4xl font-lato font-black tracking-tight text-balance text-brand-text-strong">
              Where Vision Meets Innovation
            </h1>
            <h4 className="md:hidden text-xl font-lato text-brand-text-weak tracking-tight">
              Entrust us with your digital appearance
            </h4>
          </div>
          <p className="leading-6">
            We are a full-service digital agency that specializes in web design,
            development, and digital marketing. We create digital experiences
            that are unique to your brand and help you achieve your goals.
          </p>
          <div className="space-x-4">
            <Button secondary>Book a meeting</Button>
            <Button ghost className="hidden md:inline-flex">
              Learn more
            </Button>
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <HeroImageGrid images={heroImages} />
        </div>
      </section>

      {/* Call to action */}
      <section className="hidden md:block bg-brand-text-strong">
        <div className="container flex justify-center space-x-8 py-14">
          <div className="w-full max-w-md h-[350px] relative">
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
          <div className="flex flex-col justify-center gap-8 max-w-md">
            <div>
              <h1 className="text-3xl font-lato font-bold tracking-tight text-balance text-brand-stroke-weak">
                Grow Your Business With Us
              </h1>
              <h4 className="text-xl font-lato text-brand-stroke-strong tracking-tight">
                Beautify your website and brand
              </h4>
            </div>
            <p className="leading-6 text-brand-stroke-weak">
              Our clients are the most creative and creative of any firm in the
              world. Whether it is a project to sell to or a design project to
              sell to, they all want unique results and products. Our design &
              development teams focuses on finding the perfect fit for all.
            </p>
            <Button ghost className="text-brand-text-strong">
              Start your journey with us
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4 md:hidden">
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

      {/* Testimonials */}
      <section className="space-y-12">
        <div>
          <h1 className="container text-3xl font-lato font-bold tracking-tight text-balance">
            What Our Customers Say
          </h1>
          <h4 className="container text-xl font-lato text-brand-text-weak tracking-tight">
            Read case studies of our happy customers
          </h4>
        </div>
        {testimonials.map(({ image, buttonText }, index) => (
          <Testimonial key={index} image={image} buttonText={buttonText} />
        ))}
      </section>

      <div className="w-full text-center pb-14">
        <Button secondary>{`Let's build the future`}</Button>
      </div>
    </main>
  );
}
