"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";

const NAV_LINKS = [
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#funcionalidades", label: "Funcionalidades" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e4e4e7] transition-all overflow-x-hidden ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#22c55e] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <span className="font-bold text-lg">DANFE&nbsp;Fácil</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#71717a] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <UserMenu />
        </div>

        {/* Mobile: avatar da conta + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <UserMenu />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-1.5"
            aria-label="Menu"
          >
            <span className="w-5 h-0.5 bg-[#0a0a0a]" />
            <span className="w-5 h-0.5 bg-[#0a0a0a]" />
            <span className="w-5 h-0.5 bg-[#0a0a0a]" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e4e4e7] bg-white/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#71717a] hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}