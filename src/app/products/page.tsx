import { getCategories, getProducts, getProductsCount } from "@/lib/api";
import type { Metadata } from "next";
import Pagination from "./_components/pagination";
import ProductCard from "./_components/product-card";
import { TypeCategory } from "@/content-types";

export const metadata: Metadata = {
  title: "Products",
};

type Category = TypeCategory<"WITHOUT_UNRESOLVABLE_LINKS">;
type ProductsPageProps = {
  searchParams: {
    page: string;
    category: Category["fields"]["label"];
  };
};

const PAGE_SIZE = Number(process.env.PRODUCTS_PAGE_SIZE) || 6;

function hasMatchingCategory(filter: string, categories?: Category[]) {
  return categories?.some((category) => category?.fields.label === filter);
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  // Here we fetch the total number of products and categories in parallel
  const [total, categories] = await Promise.all([
    getProductsCount(),
    getCategories(),
  ]);

  const pagesCount = Math.ceil(total / PAGE_SIZE);
  const currentPage = Math.min(
    /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
    pagesCount
  );
  const skip = (currentPage - 1) * PAGE_SIZE;

  const data = await getProducts({ skip });

  return (
    <main className="container flex flex-col flex-1 items-center space-y-8 my-8">
      <Pagination page={currentPage} totalPages={pagesCount} />
      {/* <CategoryFilter categories={categories} /> */}
      <ul className="w-full max-w-screen-lg flex flex-wrap justify-center gap-8">
        {data.items.map((product) => {
          const productCategories = product.fields.categories as Category[];
          const matchesCategory = searchParams.category
            ? hasMatchingCategory(searchParams.category, productCategories)
            : true;

          if (!matchesCategory) return null;

          return <ProductCard key={product.sys.id} product={product.fields} />;
        })}
      </ul>
    </main>
  );
}
