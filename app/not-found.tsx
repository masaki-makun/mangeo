"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="mx-a uto container flex min-h-screen flex-col items-center justify-center px-4 pb-8 pt-20">
      <h1 className="mb-4 text-center text-4xl font-bold text-on-color-light dark:text-on-color-dark">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-on-color-light dark:text-on-color-dark">
        お探しのページは存在しません。
      </p>
      <Link
        href="/"
        className="mt-8 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-1 transition-opacity hover:opacity-80 dark:bg-black"
      >
        <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-on-color-light dark:text-on-color-dark" />
      </Link>
    </div>
  );
}
