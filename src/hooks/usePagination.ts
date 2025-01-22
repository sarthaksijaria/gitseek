import { useMemo } from "react";

export const usePagination = (totalPages: number, currentPage: number, maxPagesToShow = 5) => {
  return useMemo(() => {
    if (totalPages <= 1) return [];

    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    let pages: (number | string)[] = [];

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  }, [totalPages, currentPage, maxPagesToShow]);
};
