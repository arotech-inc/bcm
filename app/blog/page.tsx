// app/(bcm)/blog/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { bcmBlogData, BcmBlogPost } from "../data/blogData"; // 데이터 불러오기

const allTags: BcmBlogPost['tag'][] = ['ENGINE', 'DESIGN', 'ART', 'SYSTEM', 'COMMUNITY'];

export default function BcmBlogList() {
  const [selectedTag, setSelectedTag] = useState<BcmBlogPost['tag'] | 'ALL'>('ALL');

  // 태그 필터링 기능
  const filteredData = selectedTag === 'ALL' 
    ? bcmBlogData 
    : bcmBlogData.filter(post => post.tag === selectedTag);

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto bg-slate-950 text-slate-300 selection:bg-amber-500 selection:text-slate-950 font-sans relative z-10">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
      
      {/* 목록 헤더 */}
      <div className="border-l-4 border-amber-500 pl-6 mb-16 relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Dev Blog Archives</h1>
        <p className="text-lg text-slate-400 font-light leading-relaxed">
          BCM 개발팀의 치열한 고민과 여정. 핵심 시뮬레이션 알고리즘부터 아트워크 작업까지, 야구에 미친 개발자들의 기록을 공유합니다.
        </p>
      </div>

      {/* ? 태그 필터링 UI (데이터 эстетика 적용) */}
      <div className="flex flex-wrap gap-3 mb-16 border border-slate-800 bg-slate-900/50 p-6 rounded-sm relative z-10">
        <button 
          onClick={() => setSelectedTag('ALL')}
          className={`px-5 py-2.5 font-mono text-xs border tracking-wider transition-colors uppercase ${selectedTag === 'ALL' ? 'bg-amber-500 text-slate-950 border-amber-600 font-bold' : 'bg-slate-950 text-amber-500/80 border-slate-700 hover:border-amber-700'}`}
        >
          [ ALL ]
        </button>
        {allTags.map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2.5 font-mono text-xs border tracking-wider transition-colors uppercase ${selectedTag === tag ? 'bg-amber-500 text-slate-950 border-amber-600 font-bold' : 'bg-slate-950 text-amber-500/80 border-slate-700 hover:border-amber-700'}`}
          >
            [ {tag} ]
          </button>
        ))}
      </div>

      {/* ? 게시글 목록 그리드 (더 각진 데이터 æ 적용) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredData.map((post, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-7 hover:border-amber-500/50 transition-colors group shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-5">
                <span className="text-[11px] font-mono text-amber-500 bg-amber-950/70 px-2.5 py-1.5 border border-amber-900 tracking-widest uppercase">
                  {post.tag}
                </span>
                <p className="text-xs font-mono text-slate-600 tracking-wider">
                  {post.date}
                </p>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors leading-snug font-sans tracking-tight line-clamp-2">
                {post.title}
              </h4>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed font-light line-clamp-3">
                {post.excerpt}
              </p>
            </div>
            <div className="border-t border-slate-800 pt-5">
              <Link href={`/blog/${post.slug}`} className="font-mono text-xs text-amber-500 hover:text-amber-400 tracking-wider group flex items-center gap-2">
                READ ARTICLE <span className="text-amber-700 transition-all group-hover:pl-1">==&gt;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 데이터가 없을 때 표시 */}
      {filteredData.length === 0 && (
        <div className="border border-slate-800 p-16 text-center text-slate-600 font-mono relative z-10">
          -- NO ARTICLES FOUND IN THIS CATEGORY --
        </div>
      )}

    </main>
  );
}