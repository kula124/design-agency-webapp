import { getProducts, getProductsCount } from "@/lib/api";
import type { Metadata } from "next";
import Pagination from "./_components/pagination";
import ProductCard from "./_components/product-card";

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

  const data = await getProducts({ skip });

  return (
    <main className="container flex min-h-screen flex-col items-center py-8 gap-8">
      <Pagination page={currentPage} totalPages={pagesCount} />
      <ul className="w-full max-w-screen-lg flex flex-wrap justify-center gap-8">
        {data.items.map((product) => (
          <li key={product.sys.id}>
            <ProductCard product={product.fields} />
          </li>
        ))}
      </ul>
    </main>
  );
}
