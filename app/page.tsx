"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

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

  const screenshots = ["/bcm1.png", "/bcm2.png", "/bcm3.png", "/bcm4.png", "/bcm5.png"];
  const scrollImgs = [...screenshots, ...screenshots];

  /* 확대 대상 결정 */
  const expandedImg = hoveredImg !== null ? hoveredImg : activeImg;

  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen selection:bg-amber-500 selection:text-slate-950">

      {/* ================= LIGHTBOX ================= */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-amber-400 transition-colors"
            onClick={() => setLightboxSrc(null)}
          >
            ✕
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-video" onClick={e => e.stopPropagation()}>
            <Image src={lightboxSrc} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-amber-900/30">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity">
          <source src="/bcm-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <p className="text-amber-400 font-mono tracking-[0.3em] mb-4 text-sm md:text-base">DATA-DRIVEN BASEBALL SIMULATION</p>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Dynasty</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              통계와 직관의 완벽한 조화. 나만의 완벽한 구단을 설계하십시오.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 font-bold text-lg rounded-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                PLAY DEMO
              </button>
              <button className="bg-transparent border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-4 font-bold text-lg rounded-sm transition-all">
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">The Ultimate Front Office Experience</h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              단순히 선수를 기용하는 것을 넘어, 구단의 재정, 스카우팅, 데이터 분석 센터를 직접 운영해야 합니다. 당신의 철학이 곧 팀의 성적이 됩니다.
            </p>
            <ul className="space-y-4 font-mono text-sm text-amber-200/80">
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
          <h2 className="text-4xl font-bold text-white mb-4">Core Simulation Engine</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">타구 속도, 발사각, 구장 팩터까지 계산하는 차세대 시뮬레이션 알고리즘</p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-sm p-8 shadow-2xl relative z-10">
          <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
            <span className="font-mono text-amber-500">LIVE ENGINE STATUS</span>
            <span className="flex items-center gap-2 text-xs font-mono"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> PROCESSING</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm">
            {[
              { label: "PITCH TRAJECTORIES", value: "1.2M/s" },
              { label: "WEATHER IMPACT", value: "ACTIVE" },
              { label: "PARK FACTORS", value: "CALCULATED" },
              { label: "AI DECISIONS", value: "99.8%" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-950 p-4 border border-slate-800 border-l-2 border-l-amber-500">
                <p className="text-slate-500 mb-1 text-xs">{stat.label}</p>
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
            <h2 className="text-4xl font-bold text-white">League & Playoff Systems</h2>
            <p className="text-slate-400 mt-2">정통 리그부터 아시아 스타일의 독특한 포스트시즌까지 완벽 구현</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Standard League", desc: "162경기 체제의 전통적인 양대 리그 시스템 및 와일드카드 결정전." },
              { title: "Step-Ladder Playoffs", desc: "정규시즌 순위에 따라 계단식으로 올라가는 치열한 포스트시즌 시스템 완벽 지원." },
              { title: "Custom Tournaments", desc: "시즌 중반에 열리는 단기 컵대회 및 글로벌 클럽 챔피언십." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-950 p-8 hover:border-amber-500/50 border border-slate-800 transition-colors duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANAGEMENT FEATURES ================= */}
      <section id="features" className="py-24 px-2 bg-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-5">
            {/* 이미지 1 */}
            <motion.div
              className="h-[26rem] bg-slate-800 rounded-sm border relative overflow-hidden cursor-pointer"
              animate={{
                scale: expandedImg === 0 ? 1.08 : 0.97,
                borderColor: expandedImg === 0 ? "rgb(245,158,11)" : "rgb(51,65,85)"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onMouseEnter={() => handleDmEnter(0)}
              onMouseLeave={handleDmLeave}
            >
              <Image src="/bcm-feat1.jpg" alt="Scouting" fill className="object-cover opacity-80" />
              {expandedImg === 0 && (
                <div className="absolute inset-0 ring-2 ring-amber-500/60 ring-inset pointer-events-none" />
              )}
            </motion.div>
            {/* 이미지 2 */}
            <motion.div
              className="h-[26rem] bg-slate-800 rounded-sm border relative overflow-hidden cursor-pointer mt-12"
              animate={{
                scale: expandedImg === 1 ? 1.08 : 0.97,
                borderColor: expandedImg === 1 ? "rgb(245,158,11)" : "rgb(51,65,85)"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onMouseEnter={() => handleDmEnter(1)}
              onMouseLeave={handleDmLeave}
            >
              <Image src="/bcm-feat2.jpg" alt="Finances" fill className="object-cover opacity-80" />
              {expandedImg === 1 && (
                <div className="absolute inset-0 ring-2 ring-amber-500/60 ring-inset pointer-events-none" />
              )}
            </motion.div>
          </div>
          <div className="order-1 md:order-2 pl-2">
            <h2 className="text-4xl font-bold text-white mb-8">Deep Management</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-amber-400 font-bold mb-2">📊 Advanced Scouting</h4>
                <p className="text-slate-400 text-sm">해외 리그와 고교 야구를 아우르는 촘촘한 스카우트망을 구축하세요. 숨겨진 원석을 발견하는 것은 당신의 몫입니다.</p>
              </div>
              <div>
                <h4 className="text-amber-400 font-bold mb-2">💰 Financial Control</h4>
                <p className="text-slate-400 text-sm">입장권 가격, 중계권 협상, 스폰서 유치까지. 승리를 위해선 튼튼한 재정이 필수적입니다.</p>
              </div>
              <div>
                <h4 className="text-amber-400 font-bold mb-2">🤝 Player Chemistry</h4>
                <p className="text-slate-400 text-sm">클럽하우스의 분위기는 데이터에 나오지 않습니다. 베테랑의 리더십과 신인들의 조화를 이끌어내세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCREENSHOTS ================= */}
      <section className="py-24 px-2 bg-slate-900 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-white mb-12">In-Game Interface</h2>
        <div className="relative">
          {/* 좌측 화살표 */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-slate-800/80 hover:bg-amber-500 border border-slate-700 hover:border-amber-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg"
            onClick={() => handleArrow("left")}
          >
            ‹
          </button>
          {/* 우측 화살표 */}
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-slate-800/80 hover:bg-amber-500 border border-slate-700 hover:border-amber-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg"
            onClick={() => handleArrow("right")}
          >
            ›
          </button>

          {/* 스크롤 컨테이너 */}
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
            <h2 className="text-4xl font-bold text-white">Dev Blog</h2>
            <button className="text-amber-500 hover:text-amber-400 font-mono text-sm">VIEW ALL →</button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: "2026. 03. 02", title: "시뮬레이션 엔진 2.0 업데이트 노트", tag: "ENGINE" },
              { date: "2026. 02. 18", title: "로스터 운용과 외국인 선수 규정 구현에 대하여", tag: "DESIGN" },
              { date: "2026. 01. 25", title: "구장 3D 렌더링 시스템 프리뷰", tag: "ART" }
            ].map((post, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 hover:border-amber-500/30 transition-colors cursor-pointer group">
                <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 border border-slate-800">{post.tag}</span>
                <h4 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-amber-400">{post.title}</h4>
                <p className="text-sm font-mono text-slate-500">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "멀티플레이어를 지원하나요?", a: "기본적으로 싱글 플레이 기반이지만, 다른 유저의 데이터를 불러와 가상 리그를 구성하는 기능을 개발 중입니다." },
              { q: "실제 선수 데이터가 사용되나요?", a: "자체 생성된 가상의 선수 데이터베이스를 사용하며, 유저가 직접 데이터를 수정할 수 있는 커스터마이징 툴을 제공할 예정입니다." },
              { q: "모바일 환경에서도 플레이가 가능한가요?", a: "현재는 PC(Windows/Mac) 버전을 최우선으로 개발 중이며, 향후 모바일 이식 가능성을 열어두고 있습니다." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-6">
                <h4 className="text-amber-400 font-bold mb-2">Q. {faq.q}</h4>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
