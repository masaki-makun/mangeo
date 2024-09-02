"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 pb-8 pt-20">
      <h1 className="mb-8 pt-16 text-4xl font-bold text-on-color-light dark:text-on-color-dark">
        製品紹介
      </h1>
      <div className="grid grid-cols-1 gap-8 text-on-color-light dark:text-on-color-dark md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="SEO アナライザー"
          description="ウェブサイトのSEOパフォーマンスを分析し、改善するための包括的なツールです。"
        />
        <ProductCard
          title="キーワード トラッカー"
          description="検索エンジンにおけるキーワードのパフォーマンスをリアルタイムで追跡します。"
        />
        <ProductCard
          title="バックリンク マネージャー"
          description="ウェブサイトのバックリンク・プロフィールを簡単に監視・管理できます。"
        />
      </div>
      <Link
        href="/"
        className="mt-8 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-1 transition-opacity hover:opacity-80 dark:bg-black"
      >
        <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-on-color-light dark:text-on-color-dark" />
      </Link>
      <div className="h-20"></div>
    </main>
  );
}

function ProductCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg bg-white p-6 text-on-color-light shadow-md dark:bg-black dark:text-on-color-dark">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <p className="text-on-color-light dark:text-on-color-dark">{description}</p>
      <button className="mt-4 rounded bg-primary-light px-4 py-2 text-white transition hover:opacity-80 dark:bg-primary-dark">
        さらに詳しく
      </button>
    </div>
  );
}
