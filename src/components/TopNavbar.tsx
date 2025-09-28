"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TopNavbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = (mounted ? resolvedTheme : undefined) === "dark";
  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 200], [88, 56]);
  const paddingX = useTransform(scrollY, [0, 200], [24, 12]);
  const borderColor = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0)", "rgba(255,255,255,0.12)"]);
  const containerMaxWidth = useTransform(scrollY, [0, 200], [1280, 1000]);


  return (
    <motion.header
      style={{ height, borderBottomColor: borderColor, borderBottomWidth: 1, borderBottomStyle: "solid" }}
      className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <motion.div
        style={{ paddingLeft: paddingX, paddingRight: paddingX, maxWidth: mounted ? containerMaxWidth : 1280 }}
        className="mx-auto flex h-full items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/portfolio/abemedia.black.svg?v=4"
              alt="Abe Media"
              width={175}
              height={35}
              className="block dark:hidden"
            />
            <Image
              src="/images/portfolio/abemedia.white.svg?v=4"
              alt="Abe Media"
              width={175}
              height={35}
              className="hidden dark:block"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-5 md:gap-6 text-sm ml-3 sm:ml-6 md:ml-10">
          <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
          <Link href="/services" className="opacity-80 hover:opacity-100">Services</Link>
          <Link href="/logo-maker" className="opacity-80 hover:opacity-100">Logo Maker</Link>
          <Link href="/portfolio" className="opacity-80 hover:opacity-100">Portfolio</Link>
          <Link href="/blog" className="opacity-80 hover:opacity-100">Blog</Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link>
          <Link href="/get-started" className="opacity-80 hover:opacity-100">Get Started</Link>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border opacity-80 hover:opacity-100"
          >
            {mounted && (isDark ? <Sun className="size-4" /> : <Moon className="size-4" />)}
          </button>
        </nav>
      </motion.div>
    </motion.header>
  );
}


