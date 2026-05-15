"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Blog with Rafi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Portfolio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-slate-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Portfolio
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
