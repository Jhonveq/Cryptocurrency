"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type PaginationControlsProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  finalLimit: number;
};

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  return (
    <div className="flex gap-2 justify-center mt-5">
      <button
        className="bg-slate-950 duration-200 text-white rounded-lg border-white border hover:bg-blue-950 py-2 text-center w-32 "
        onClick={() => {
          router.push(`?page=${Number(page) - 1}`);
        }}
        disabled={!hasPrevPage}
      >
        Previous
      </button>
      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`?page=${Number(page) + 1}`);
        }}
        className="bg-slate-950 duration-200 text-white rounded-lg border-white border hover:bg-blue-950 py-2 text-center w-32"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
