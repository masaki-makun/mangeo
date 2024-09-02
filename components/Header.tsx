"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScroll, setIsScroll] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const checkIfScroll = () => {
      if (isMenuOpen) {
        return document.body.classList.add("overflow-hidden");
      } else {
        return document.body.classList.remove("overflow-hidden");
      }
    };
    checkIfScroll();
  }, [isMenuOpen, isScroll]);

  return (
    <header className="fixed z-20 flex h-20 w-full items-center justify-between bg-white px-4 py-4 dark:bg-black">
      <nav className="container mx-auto flex items-center justify-between">
        {isMobile ? (
          // モバイル
          <>
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline:none p-2 text-on-color-light transition hover:opacity-80 dark:text-on-color-dark"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <PageTransition>
                  {/* モーダルウィンドウ */}
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute left-0 top-0 z-20 min-h-screen min-w-full cursor-pointer bg-white opacity-95 transition dark:bg-black"
                  ></div>

                  {/* モバイルメニュー */}
                  <div className="absolute left-0 top-0 z-20 flex min-h-screen w-[50vw] flex-col items-center justify-between gap-2 bg-background-light px-8 py-24 text-on-color-light shadow-xl transition dark:bg-background-dark dark:text-on-color-dark">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="absolute left-5 top-4 p-1 text-3xl text-on-color-light dark:text-on-color-dark"
                    >
                      &times;
                    </button>
                    <ul className="flex flex-col gap-8">
                      <li className="px-4 py-2 transition-opacity hover:opacity-80">
                        <Link
                          href="/products"
                          className="px-4 py-2 transition-opacity hover:opacity-80"
                          scroll={false}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          製品
                        </Link>
                      </li>
                      <li className="px-4 py-2 transition-opacity hover:opacity-80">
                        <Link
                          href="/about"
                          className="px-4 py-2 transition-opacity hover:opacity-80"
                          scroll={false}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          会社概要
                        </Link>
                      </li>
                      <li className="px-4 py-2 transition-opacity hover:opacity-80">
                        <Link
                          href="/pricing"
                          className="px-4 py-2 transition-opacity hover:opacity-80"
                          scroll={false}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          料金
                        </Link>
                      </li>
                    </ul>
                    <div className="px-4 py-2">
                      <ThemeToggle />
                    </div>
                  </div>
                </PageTransition>
              )}
            </div>

            {!isMenuOpen && (
              <Link
                href="/"
                className="text-2xl font-bold transition-opacity hover:opacity-80"
                scroll={false}
              >
                mangeo
              </Link>
            )}
          </>
        ) : (
          // PC
          <>
            <Link
              href="/"
              className="text-2xl font-bold text-on-color-light transition-opacity hover:opacity-80 dark:text-on-color-dark"
              scroll={false}
            >
              mangeo
            </Link>
            <div className="space-x-4 text-on-color-light dark:text-on-color-dark">
              <Link href="/products" className="transition-opacity hover:opacity-80" scroll={false}>
                製品
              </Link>
              <Link href="/about" className="transition-opacity hover:opacity-80" scroll={false}>
                会社概要
              </Link>
              <Link href="/pricing" className="transition-opacity hover:opacity-80" scroll={false}>
                料金
              </Link>
            </div>
          </>
        )}

        <div className="flex items-center space-x-4">
          {!isMobile && <ThemeToggle />}
          {!isMenuOpen && (
            <button className="rounded-full border border-on-color-light bg-white px-4 py-2 text-on-color-light transition-opacity hover:opacity-80 dark:border dark:border-on-color-dark dark:bg-black dark:text-on-color-dark">
              サインイン
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
