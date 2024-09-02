"use client";

import Hero from "@/components/Hero";
import AIIntegrationCard from "@/components/AIIntegrationCard";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main className="container mx-auto px-4 pb-[112px] pt-20">
      <Hero />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <AIIntegrationCard />
        <FeatureCard
          title="卓越したSEO:"
          description="最先端のテクノロジーと120以上のAIインサイトにより、優れたSEOパフォーマンスを実現します。"
          metric="+120"
        />
        <FeatureCard
          title="精密なSEOツール："
          description="10種類以上の強力なSEOツールを活用し、正確性と効果を高める。"
          metric="+10"
        />
      </div>
    </main>
  );
}
