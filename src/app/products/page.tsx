import Image from "next/image";
import { getProducts, getProductsCount } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

type ProductsPageProps = {
  searchParams: { page: string };
};
const PAGE_SIZE = Number(process.env.PRODUCTS_PAGE_SIZE) || 6;

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const total = await getProductsCount();

  const pagesCount = Math.ceil(total / PAGE_SIZE);
  const currentPage = Math.min(
    /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
    pagesCount
  );
  const skip = (currentPage - 1) * PAGE_SIZE;
  console.log({ pagesCount, currentPage, skip });
  const data = await getProducts({ skip });

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Products</h1>
      <ul className="w-full space-y-4">
        {data.items.map((product) => (
          <li key={product.sys.id}>
            <h2>{product.fields.name}</h2>
            <p>{product.fields.description}</p>
            {
              <div className="relative w-96 h-60">
                <Image
                  fill
                  src={`https:${product.fields.heroImage?.fields.file?.url}`}
                  alt={`https:${product.fields.heroImage?.fields.title}`}
                  style={{ objectFit: "cover" }}
                />
              </div>
            }
          </li>
        ))}
      </ul>
    </main>
  );
}
