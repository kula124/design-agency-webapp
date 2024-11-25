"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  totalPages: number;
  pathname?: string;
}

const Pagination = ({ page, totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const isFirstPage = page === 1;
  const isLastPage = page >= totalPages;

  const setPageParam = useCallback(
    (name: string, value: number) => {
      const currentPage = searchParams.get("page");
      if (Number(currentPage) === value) return;

      const params = new URLSearchParams(searchParams);
      params.set(name, value.toString());

      router.replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const buttonClass = "px-4 py-2 rounded-sm font-medium transition-colors";
  const activeButtonClass = "bg-brand-primary text-white hover:opacity-90";
  const disabledButtonClass =
    "bg-brand-stroke-weak text-brand-text-weak cursor-not-allowed";

  return (
    <div className="flex items-baseline gap-8">
      <div className="flex gap-4 items-baseline">
        <button
          className={`${buttonClass} ${
            isFirstPage ? disabledButtonClass : activeButtonClass
          }`}
          onClick={() => setPageParam("page", 1)}
          disabled={isFirstPage}
        >
          First
        </button>
        <button
          className={`${buttonClass} ${
            isFirstPage ? disabledButtonClass : activeButtonClass
          }`}
          onClick={() => setPageParam("page", page > 1 ? page - 1 : 1)}
          disabled={isFirstPage}
        >
          Previous
        </button>
        <div className="text-sm">
          Page <span className="font-bold">{page}</span> of{" "}
          <span className="font-bold">{totalPages}</span>
        </div>
        <button
          className={`${buttonClass} ${
            isLastPage ? disabledButtonClass : activeButtonClass
          }`}
          onClick={() => setPageParam("page", page + 1)}
          disabled={isLastPage}
        >
          Next
        </button>
        <button
          className={`${buttonClass} ${
            isLastPage ? disabledButtonClass : activeButtonClass
          }`}
          onClick={() => setPageParam("page", totalPages)}
          disabled={isLastPage}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
