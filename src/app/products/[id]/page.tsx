import { getProduct } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Product",
};

const currencySymbolMapping: { [key: string]: string } = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

type ProductDetailProps = {
  params: { id: string };
};

export default async function ProductDetail({ params }: ProductDetailProps) {
  const id = Number.parseInt(params.id);
  const product = await getProduct(id)(); // Mind the double invocation

  if (!product) {
    return notFound();
  }

  return (
    <main className="container flex flex-col items-center space-y-8">
      <h1 className="text-2xl font-lato font-black text-brand-stroke-strong pt-8">
        {product.fields.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-3/4 relative">
        <div className="relative">
          <span className="absolute top-4 left-4 z-40 px-2 py-1 bg-brand-fill text-brand-primary rounded-full text-sm font-medium">
            {product.fields.currencyCode &&
              currencySymbolMapping[product.fields.currencyCode]}
            {product.fields.price}
          </span>
          <Image
            src={`https:${product.fields.heroImage?.fields.file?.url}`}
            alt={`https:${product.fields.heroImage?.fields.title}`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-[400px] object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="grid grid-cols-2 gap-2">
            {product.fields.images?.map((image) => (
              <div key={image?.sys.id} className="relative w-full h-32">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`https:${image?.fields.file?.url}`}
                  alt={`https:${image?.fields.title}`}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-brand-text-weak">
              {product.fields.description}
            </p>
            <button className="bg-brand-primary hover:opacity-80 text-white font-bold py-2 px-4 rounded-sm h-12">
              + Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
