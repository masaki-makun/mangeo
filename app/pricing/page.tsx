"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 pb-8 pt-20">
      <h1 className="mb-8 pt-16 text-4xl font-bold text-on-color-light dark:text-on-color-dark">
        料金プラン
      </h1>
      <div className="grid grid-cols-1 gap-8 text-on-color-light dark:text-on-color-dark md:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          title="Basic"
          price="¥3000"
          features={["SEO アナライザー", "10 キーワードトラッキング", " 基本のレポート"]}
        />
        <PricingCard
          title="Pro"
          price="¥8000"
          features={[
            "SEO アナライザー",
            "50 キーワードトラッキング",
            "高度なレポート",
            "バックリンクマネージャー",
          ]}
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          features={["全プロ機能", "無制限キーワードトラッキング", "API アクセス", "専用サポート"]}
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

function PricingCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 text-on-color-light shadow-md dark:bg-black dark:text-on-color-dark">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <p className="mb-6 text-4xl font-bold">
        {price}
        <span className="text-sm font-normal">/月</span>
      </p>
      <ul className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex items-center">
            <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full rounded bg-primary-light px-4 py-2 text-white transition hover:opacity-80 dark:bg-primary-dark">
        プランを選択
      </button>
    </div>
  );
}
