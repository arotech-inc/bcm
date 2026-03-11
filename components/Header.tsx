"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Engine", href: "#engine" },
  { name: "Features", href: "#features" },
  { name: "Dev Blog", href: "#blog" },
];

export default function BcmHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* 로고 */}
        <Link href="/">
          <Image src="/logo.png" alt="BCM Baseball Club Manager" width={160} height={40} className="object-contain" />
        </Link>

        {/* PC 네비게이션 */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">
              {link.name}
            </Link>
          ))}
          <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2 rounded-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            WISHLIST
          </button>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-amber-400 text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-amber-400 font-bold uppercase tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}