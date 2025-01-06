"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { XIcon } from "lucide-react";
import { TypeCategory } from "@/content-types";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  categories: TypeCategory<"WITHOUT_UNRESOLVABLE_LINKS">[];
};

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const searchParams = useSearchParams();
  const categoryFilters: string[] = useMemo(() => {
    return searchParams.get("categories")?.split(",") || [];
  }, [searchParams]);
  const router = useRouter();
  const pathname = usePathname();

  const updateSearchParams = useCallback(
    (categories: string[]) => {
      const params = new URLSearchParams(searchParams);
      if (categories.length > 0) {
        params.set("categories", categories.join(","));
      } else {
        params.delete("categories");
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const toggleCategory = useCallback(
    (category: string) => {
      const updatedCategories = categoryFilters.includes(category)
        ? categoryFilters.filter((c) => c !== category)
        : [...categoryFilters, category];
      updateSearchParams(updatedCategories);
    },
    [categoryFilters, updateSearchParams]
  );

  const resetFilters = useCallback(() => {
    updateSearchParams([]);
  }, [updateSearchParams]);

  return (
    <ul className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <li key={category.fields.label}>
          <button
            className={cn(
              "px-3 py-1 rounded-full text-sm transition-colors bg-white border border-brand-stroke-weak text-brand-text-strong hover:bg-brand-stroke-weak",
              {
                "bg-brand-stroke-weak": categoryFilters.includes(
                  category.fields.label
                ),
                "opacity-60":
                  categoryFilters.length > 0 &&
                  !categoryFilters.includes(category.fields.label),
              }
            )}
            onClick={() => toggleCategory(category.fields.label)}
          >
            {category.fields.label}
          </button>
        </li>
      ))}
      {categoryFilters.length > 0 && (
        <li>
          <button
            className="px-3 py-1 rounded-full text-sm transition-colors bg-brand-stroke-weak border border-brand-stroke-weak text-brand-text-weak flex items-center hover:text-brand-text-strong"
            onClick={resetFilters}
          >
            Reset filters
            <XIcon className="w-4 h-4 ml-1" />
          </button>
        </li>
      )}
    </ul>
  );
};

export default CategoryFilter;
