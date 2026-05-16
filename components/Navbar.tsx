"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "হোম", href: "/" },
    { label: "ব্লগ", href: "/blog" },
    { label: "ভিডিও", href: "/videos" },
    { label: "আমার সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text font-heading text-lg font-bold tracking-tight text-transparent sm:text-xl">
              Blog with Rafi
            </span>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-0.5"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://mfr-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
            >
              পোর্টফোলিও
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1.5 rounded-lg border border-border bg-surface/80 p-2 text-primary transition-colors hover:bg-surface"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-5 bg-primary transition-transform ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-primary transition-opacity ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-primary transition-transform ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4 md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-2 py-1 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:bg-surface hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://mfr-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-1 text-sm font-medium text-muted transition-colors duration-150 hover:bg-surface hover:text-primary"
            >
              পোর্টফোলিও
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
