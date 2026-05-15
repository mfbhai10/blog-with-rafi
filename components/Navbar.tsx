"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "হোম", href: "/" },
    { label: "ব্লগ", href: "/blog" },
    { label: "ভিডিও", href: "/videos" },
    { label: "আমার সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-surface/80 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-lg sm:text-xl font-heading font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog with Rafi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://mfr-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text-primary"
            >
              পোর্টফোলিও
            </a>

            {/* Theme toggle aligned to the right */}
            <div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 rounded-lg p-2 text-text-primary transition-colors hover:bg-surface-soft"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-text-primary transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-text-primary transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-text-primary transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1 text-sm font-medium text-text-muted transition-colors duration-150 hover:bg-surface hover:text-text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://mfr-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-1 text-sm font-medium text-text-muted transition-colors duration-150 hover:bg-surface hover:text-text-primary"
            >
              পোর্টফোলিও
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
