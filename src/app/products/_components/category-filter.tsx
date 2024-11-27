"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { XIcon } from "lucide-react";
import { TypeCategory } from "@/content-types";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  categories: TypeCategory<"WITHOUT_UNRESOLVABLE_LINKS">[];
};

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const searchParams = useSearchParams();
  const categoryFilter: string = searchParams.get("category") || "";
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParam = useCallback(
    (name: string, value: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.set(name, value);
      // If search params are still the same there's no need to do anything
      if (currentParams === params.toString()) return;

      router.replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const deleteSearchParam = useCallback(
    (name: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.delete(name);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return (
    <ul className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <li key={category.fields.label}>
          <button
            className={cn(
              "px-3 py-1 rounded-full text-sm transition-colors bg-white border border-brand-stroke-weak text-brand-text-strong hover:bg-brand-stroke-weak",
              {
                "opacity-60":
                  categoryFilter !== "" &&
                  categoryFilter !== category.fields.label,
              }
            )}
            onClick={() => setSearchParam("category", category.fields.label)}
          >
            {category.fields.label}
          </button>
        </li>
      ))}
      {categoryFilter !== "" && (
        <li>
          <button
            className="px-3 py-1 rounded-full text-sm transition-colors bg-brand-stroke-weak border border-brand-stroke-weak text-brand-text-weak flex items-center hover:text-brand-text-strong"
            onClick={() => deleteSearchParam("category")}
          >
            Reset filter
            <XIcon className="w-4 h-4 ml-1" />
          </button>
        </li>
      )}
    </ul>
  );
};

export default CategoryFilter;
