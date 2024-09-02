"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={theme === "light"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <div className="peer h-6 w-14 rounded-full border border-on-color-light bg-none before:content-[''] after:absolute after:left-[2px] after:top-[1.5px] after:h-5 after:w-5 after:rounded-full after:border after:border-on-color-light after:bg-on-color-light after:transition-all after:content-[''] peer-checked:bg-none peer-checked:after:translate-x-[32px] peer-checked:after:border-on-color-light peer-focus:outline-none dark:border dark:border-on-color-dark dark:bg-none dark:after:border-on-color-dark dark:after:bg-on-color-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-1.5 top-1.5 h-3 w-3 text-on-color-light transition-opacity duration-200 ease-in-out dark:text-white"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-1.5 top-1.5 h-3 w-3 text-on-color-light transition-opacity duration-200 ease-in-out dark:text-white"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </div>
      </label>
    </div>
  );
}
