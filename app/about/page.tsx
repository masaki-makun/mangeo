"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 pb-8 pt-20">
      <h1 className="mb-8 pt-16 text-4xl font-bold text-on-color-light dark:text-on-color-dark">
        会社概要
      </h1>
      <div className="prose dark:prose-invert max-w-none text-on-color-light dark:text-on-color-dark">
        <p>
          優れたSEOのパートナー、マンジェオへようこそ。
          私たちは情熱的なSEOの専門家と開発者で構成されたチームで、企業のオンラインにおける知名度向上のお手伝いをすることに専念しています。
        </p>
        <h2>私たちの使命</h2>
        <p>
          私たちの使命は、最先端のSEOツールと洞察力であらゆる規模のビジネスに力を与え、デジタル環境での効果的な競争を可能にすることです。
        </p>
        <h2>チーム紹介</h2>
        <p>
          数十年の経験を持つ業界のベテランが率いる当社のチームは、SEOスペシャリスト、データサイエンティスト、ソフトウェアエンジニアで構成され、当社のツールをSEOテクノロジーの最前線に保つためにたゆまぬ努力を続けています。
        </p>
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
