"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { bcmBlogData } from "./data/blogData";

export default function BcmHome() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  /* ── Deep Management ── */
  const [activeImg, setActiveImg] = useState(0);
  const [hoveredImg, setHoveredImg] = useState<number | null>(null);
  const dmIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startDmInterval = useCallback(() => {
    dmIntervalRef.current = setInterval(() => {
      setActiveImg(prev => (prev === 0 ? 1 : 0));
    }, 8000);
  }, []);

  useEffect(() => {
    startDmInterval();
    return () => { if (dmIntervalRef.current) clearInterval(dmIntervalRef.current); };
  }, [startDmInterval]);

  const handleDmEnter = (idx: number) => {
    setHoveredImg(idx);
    if (dmIntervalRef.current) clearInterval(dmIntervalRef.current);
  };
  const handleDmLeave = () => {
    setHoveredImg(null);
    startDmInterval();
  };

  /* ── In-Game Interface ── */
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isPausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const speed = 0.5;
    const animate = () => {
      if (!isPausedRef.current && el) {
        posRef.current += speed;
        const half = el.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        el.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const handleArrow = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = 440;
    const half = el.scrollWidth / 2;
    posRef.current = dir === "right"
      ? Math.min(posRef.current + step, half - 1)
      : Math.max(posRef.current - step, 0);
    el.style.transform = `translateX(-${posRef.current}px)`;
  };

  const screenshots = ["/bcm1.png", "/bcm2.png", "/bcm3.png", "/bcm4.png", "/bcm5.jpg"];
  const scrollImgs = [...screenshots, ...screenshots];

  const expandedImg = hoveredImg !== null ? hoveredImg : activeImg;

  /* ── Play Demo 준비중 팝업 ── */
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen selection:bg-amber-500 selection:text-slate-950">

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-amber-400 transition-colors z-[60]"
              onClick={() => setLightboxSrc(null)}
            >
              ✕
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-video cursor-default" 
              onClick={e => e.stopPropagation()}
            >
              <Image src={lightboxSrc} alt="Preview" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= DEMO POPUP ================= */}
      <AnimatePresence>
        {showDemoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setShowDemoPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-sm p-10 max-w-md w-full text-center shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-5xl mb-4">🚧</div>
              <h3 className="text-2xl font-bold text-white mb-3">데모 준비 중</h3>
              <p className="text-slate-400 text-base mb-6">
                플레이 가능한 데모 버전을 열심히 개발 중입니다.<br />조금만 기다려 주세요!
              </p>
              <button
                onClick={() => setShowDemoPopup(false)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-sm transition-all"
              >
                확인
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-amber-900/30">
        <Image src="/bcm_hero.jpg" alt="BCM Hero" fill className="absolute inset-0 object-cover opacity-100" priority />
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity">
          <source src="/bcm-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            {/* sm → base */}
            <p className="text-amber-400 font-mono tracking-[0.3em] mb-4 text-base md:text-lg">DATA-DRIVEN BASEBALL SIMULATION</p>
            {/* 5xl→6xl / 8xl→9xl */}
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Dynasty</span>
            </h1>
            {/* lg→xl / 2xl→3xl */}
            <p className="text-xl md:text-3xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              통계와 직관의 완벽한 조화. 나만의 완벽한 구단을 설계하십시오.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* lg→xl */}
              <button
                onClick={() => setShowDemoPopup(true)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 font-bold text-xl rounded-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
              >
                PLAY DEMO
              </button>
              <button className="bg-transparent border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-4 font-bold text-xl rounded-sm transition-all">
                VIEW FEATURES
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GAME OVERVIEW ================= */}
      <section id="overview" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            {/* 3xl→4xl / 5xl→6xl */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">The Ultimate<br />Front Office Experience</h2>
            {/* lg→xl */}
            <p className="text-slate-400 leading-relaxed text-xl mb-6">
              단순히 선수를 기용하는 것을 넘어, 구단의 재정, 스카우팅, 데이터 분석 센터를 직접 운영해야 합니다. 당신의 철학이 곧 팀의 성적이 됩니다.
            </p>
            {/* sm→base */}
            <ul className="space-y-4 font-mono text-base text-amber-200/80">
              <li>&gt; 10,000+ REALISTIC PLAYER PROFILES</li>
              <li>&gt; DYNAMIC PLAYER DEVELOPMENT</li>
              <li>&gt; ADVANCED SABERMETRICS INTEGRATION</li>
            </ul>
          </motion.div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
            <Image src="/bcm-overview.jpg" alt="Game Overview" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ================= SIMULATION ENGINE ================= */}
      <section id="engine" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-amber-500/5 blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          {/* 4xl→5xl */}
          <h2 className="text-5xl font-bold text-white mb-4">Core Simulation Engine</h2>
          {/* base(default)→lg */}
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">타구 속도, 발사각, 구장 팩터까지 계산하는 차세대 시뮬레이션 알고리즘</p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-sm p-8 shadow-2xl relative z-10">
          <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
            {/* base→lg */}
            <span className="font-mono text-amber-500 text-lg">LIVE ENGINE STATUS</span>
            <span className="flex items-center gap-2 text-sm font-mono text-slate-500 uppercase">
              <motion.span
                animate={{ 
                  opacity: [1, 0.3, 1],
                  boxShadow: [
                    "0 0 5px #4ade80, 0 0 10px #4ade80",
                    "0 0 1px #4ade80, 0 0 2px #4ade80", 
                    "0 0 5px #4ade80, 0 0 10px #4ade80"
                  ] 
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"
              />
              PROCESSING
            </span>
          </div>
          {/* sm→base */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-base">
            {[
              { label: "PITCH TRAJECTORIES", value: "1.2M/s" },
              { label: "WEATHER IMPACT", value: "ACTIVE" },
              { label: "PARK FACTORS", value: "CALCULATED" },
              { label: "AI DECISIONS", value: "99.8%" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-950 p-4 border border-slate-800 border-l-2 border-l-amber-500">
                {/* xs→sm */}
                <p className="text-slate-500 mb-1 text-sm">{stat.label}</p>
                <p className="text-white font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEAGUE SYSTEM ================= */}
      <section className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-l-4 border-amber-500 pl-4">
            {/* 4xl→5xl */}
            <h2 className="text-5xl font-bold text-white">League & Playoff Systems</h2>
            {/* base→lg */}
            <p className="text-slate-400 mt-2 text-lg">정통 리그부터 아시아 스타일의 독특한 포스트시즌까지 완벽 구현</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Standard League", desc: "162경기 체제의 전통적인 양대 리그 시스템 및 와일드카드 결정전." },
              { title: "Step-Ladder Playoffs", desc: "정규시즌 순위에 따라 계단식으로 올라가는 치열한 포스트시즌 시스템 완벽 지원." },
              { title: "Custom Tournaments", desc: "시즌 중반에 열리는 단기 컵대회 및 글로벌 클럽 챔피언십." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-950 p-8 hover:border-amber-500/50 border border-slate-800 transition-colors duration-300 group">
                {/* xl→2xl */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400">{feature.title}</h3>
                {/* sm→base */}
                <p className="text-slate-400 text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANAGEMENT FEATURES ================= */}
      <section id="features" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* 이미지 컬럼 - In-Game Interface와 동일한 h-80 */}
          <div className="order-2 md:order-1 flex flex-col gap-4">
            {/* 이미지 1 */}
            <div
              className="h-80 bg-slate-900 rounded-sm border relative overflow-hidden cursor-pointer transition-colors duration-700"
              style={{ borderColor: expandedImg === 0 ? "rgb(245,158,11)" : "rgb(51,65,85)" }}
              onMouseEnter={() => handleDmEnter(0)}
              onMouseLeave={handleDmLeave}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: expandedImg === 0 ? 1.07 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image src="/bcm-feat1.jpg" alt="Scouting" fill className="object-contain" />
              </motion.div>
              {expandedImg === 0 && (
                <div className="absolute inset-0 ring-2 ring-amber-500/50 ring-inset pointer-events-none z-10" />
              )}
            </div>
            {/* 이미지 2 */}
            <div
              className="h-80 bg-slate-900 rounded-sm border relative overflow-hidden cursor-pointer transition-colors duration-700"
              style={{ borderColor: expandedImg === 1 ? "rgb(245,158,11)" : "rgb(51,65,85)" }}
              onMouseEnter={() => handleDmEnter(1)}
              onMouseLeave={handleDmLeave}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: expandedImg === 1 ? 1.07 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image src="/bcm-feat2.jpg" alt="Finances" fill className="object-contain" />
              </motion.div>
              {expandedImg === 1 && (
                <div className="absolute inset-0 ring-2 ring-amber-500/50 ring-inset pointer-events-none z-10" />
              )}
            </div>
          </div>

          {/* 텍스트 컬럼 */}
          <div className="order-1 md:order-2">
            {/* 4xl→5xl */}
            <h2 className="text-5xl font-bold text-white mb-8">Deep Management</h2>
            <div className="space-y-8">
              <div>
                {/* base→lg */}
                <h4 className="text-amber-400 font-bold mb-2 text-lg">📊 Advanced Scouting</h4>
                {/* sm→base */}
                <p className="text-slate-400 text-base">해외 리그와 고교 야구를 아우르는 촘촘한 스카우트망을 구축하세요. 숨겨진 원석을 발견하는 것은 당신의 몫입니다.</p>
              </div>
              <div>
                <h4 className="text-amber-400 font-bold mb-2 text-lg">💰 Financial Control</h4>
                <p className="text-slate-400 text-base">입장권 가격, 중계권 협상, 스폰서 유치까지. 승리를 위해선 튼튼한 재정이 필수적입니다.</p>
              </div>
              <div>
                <h4 className="text-amber-400 font-bold mb-2 text-lg">🤝 Player Chemistry</h4>
                <p className="text-slate-400 text-base">클럽하우스의 분위기는 데이터에 나오지 않습니다. 베테랑의 리더십과 신인들의 조화를 이끌어내세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCREENSHOTS ================= */}
      <section className="py-24 px-2 bg-slate-900 overflow-hidden">
        {/* 3xl→4xl */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">In-Game Interface</h2>
        <div className="relative">
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-slate-800/80 hover:bg-amber-500 border border-slate-700 hover:border-amber-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg"
            onClick={() => handleArrow("left")}
          >
            ‹
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-slate-800/80 hover:bg-amber-500 border border-slate-700 hover:border-amber-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg"
            onClick={() => handleArrow("right")}
          >
            ›
          </button>
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-4 pb-8 will-change-transform"
              style={{ width: "max-content" }}
              onMouseEnter={() => { isPausedRef.current = true; }}
              onMouseLeave={() => { isPausedRef.current = false; }}
            >
              {scrollImgs.map((src, i) => (
                <div
                  key={i}
                  className="min-w-[380px] md:min-w-[480px] h-80 bg-slate-800 rounded-sm border border-slate-700 relative group overflow-hidden cursor-pointer flex-shrink-0"
                  onClick={() => setLightboxSrc(src)}
                >
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 transition-all z-20 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-widest drop-shadow-lg text-sm border border-white/50 px-4 py-2 transition-opacity duration-300">
                      VIEW
                    </span>
                  </div>
                  <Image
                    src={src}
                    alt={`BCM Screenshot ${(i % screenshots.length) + 1}`}
                    fill
                    className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEV BLOG ================= */}
      <section id="blog" className="py-24 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-5xl font-bold text-white">Dev Blog</h2>
            <Link
              href="/blog"
              className="group relative inline-flex items-center gap-3 font-mono text-sm tracking-widest border border-amber-500/40 px-5 py-2.5 text-amber-500 hover:text-slate-950 hover:bg-amber-500 transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:shadow-[0_0_24px_rgba(245,158,11,0.4)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-amber-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative">VIEW ALL ARTICLES</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bcmBlogData.slice(0, 3).map((post, i) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={i} 
                className="bg-slate-900 border border-slate-800 p-6 hover:border-amber-500/30 transition-colors cursor-pointer group block"
              >
                <span className="text-sm font-mono text-slate-500 bg-slate-950 px-2 py-1 border border-slate-800">{post.tag}</span>
                <h4 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-amber-400">{post.title}</h4>
                <p className="text-base font-mono text-slate-500">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="py-24 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Community</h2>
          <p className="text-slate-400 text-lg mb-12">개발 소식을 가장 먼저 받아보고, 다른 감독들과 전략을 나눠보세요.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Discord */}
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 border border-slate-800 hover:border-[#5865F2]/50 p-8 transition-all duration-300"
            >
              <svg className="w-10 h-10 mx-auto mb-4 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#5865F2]">Discord</h3>
              <p className="text-slate-500 text-sm">커뮤니티 참여하기</p>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 border border-slate-800 hover:border-slate-500/50 p-8 transition-all duration-300"
            >
              <svg className="w-10 h-10 mx-auto mb-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-slate-300">X (Twitter)</h3>
              <p className="text-slate-500 text-sm">최신 소식 팔로우</p>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 border border-slate-800 hover:border-red-500/50 p-8 transition-all duration-300"
            >
              <svg className="w-10 h-10 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-red-400">YouTube</h3>
              <p className="text-slate-500 text-sm">개발 영상 시청</p>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          {/* 3xl→4xl */}
          <h2 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "멀티플레이어를 지원하나요?", a: "기본적으로 싱글 플레이 기반이지만, 다른 유저의 데이터를 불러와 가상 리그를 구성하는 기능을 개발 중입니다." },
              { q: "실제 선수 데이터가 사용되나요?", a: "자체 생성된 가상의 선수 데이터베이스를 사용하며, 유저가 직접 데이터를 수정할 수 있는 커스터마이징 툴을 제공할 예정입니다." },
              { q: "모바일 환경에서도 플레이가 가능한가요?", a: "현재는 PC(Windows/Mac) 버전을 최우선으로 개발 중이며, 향후 모바일 이식 가능성을 열어두고 있습니다." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-6">
                {/* base→lg */}
                <h4 className="text-amber-400 font-bold mb-2 text-lg">Q. {faq.q}</h4>
                {/* sm→base */}
                <p className="text-slate-400 text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
