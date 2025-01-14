// Here we could use a card component from an external ui library.
// For example, shadcn/ui (https://ui.shadcn.com)

import Link from "next/link";
import Image from "next/image";
import { TypeProduct } from "@/content-types";

const ProductCard = ({
  product,
}: {
  product: TypeProduct<"WITHOUT_UNRESOLVABLE_LINKS">["fields"];
}) => {
  return (
    <div className="bg-white rounded-sm shadow-md overflow-hidden min-w-96">
      <div className="p-4">
        <h2 className="text-xl font-black text-brand-text-weak">
          {product.name}
        </h2>
        <p className="text-brand-text-weak text-sm mb-4">
          {product.description}
        </p>
      </div>
      <Link href={`products/${product.id}`} className="block">
        <div className="relative w-full h-64">
          <Image
            // The "key" property forces the image to re-render; this prevents the problem where the previous product image is displayed (for a split second) while the new product image is loading.
            key={product.heroImage?.sys.id}
            src={`https:${product.heroImage?.fields.file?.url}`}
            alt={product.heroImage?.fields.title || "Product image"}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-wrap gap-2">
        {product.categories?.map((category) => (
          <span
            key={`${product.id}-${category?.fields.label}`}
            className={`inline-block px-3 py-1 text-xs text-brand-text-weak bg-brand-stroke-weak rounded-full
            )}`}
          >
            {category?.fields.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
