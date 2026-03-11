import Link from "next/link";
import Image from "next/image";
import { bcmBlogData } from "../../data/blogData"; // 데이터 파일 경로에 맞게 확인해주세요!

// ? Next.js 15버전 최신 규칙: params를 Promise로 받습니다.
export default async function BcmBlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  // ? 비동기로 params를 풀어서 slug 값을 꺼냅니다.
  const resolvedParams = await params;
  const post = bcmBlogData.find((n) => n.slug === resolvedParams.slug);

  // 일치하는 게시글이 없을 때 띄워줄 화면
  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 pt-40 pb-20 px-6 flex flex-col items-center justify-center font-mono text-slate-500">
        <div className="border border-slate-800 p-10 bg-slate-900/50 text-center shadow-2xl">
          <p className="text-xl mb-4">-- [ERROR 404] ARTICLE NOT FOUND --</p>
          <Link href="/blog" className="text-amber-500 mt-4 inline-block hover:text-amber-400 hover:underline tracking-widest">
            &lt;== RETURN TO ARCHIVES
          </Link>
        </div>
      </main>
    );
  }

  // 정상적으로 게시글을 찾았을 때 렌더링될 화면
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 pt-32 pb-20 px-6 font-sans relative z-10 selection:bg-amber-500 selection:text-slate-950">
      {/* 데이터 느낌을 주는 배경 그리드 패턴 */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
      
      <article className="max-w-4xl mx-auto relative z-10">
        
        {/* 뒤로가기 링크 */}
        <div className="mb-10 inline-block border border-slate-800 bg-slate-900/80 px-4 py-2 hover:border-amber-500/50 transition-colors shadow-lg">
          <Link href="/blog" className="text-amber-500 font-mono text-xs hover:text-amber-400 tracking-wider group flex items-center gap-2">
            <span className="text-amber-700 transition-all group-hover:-translate-x-1">&lt;==</span> BACK TO ARCHIVES
          </Link>
        </div>

        {/* 게시글 헤더 (데이터 æ 적용) */}
        <div className="mb-12 border border-slate-800 bg-slate-900 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* 상단 장식 선 */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-transparent" />
          
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-800">
            <span className="text-xs font-mono text-amber-500 bg-amber-950/50 px-3 py-1.5 border border-amber-900/50 tracking-widest uppercase">
              {post.tag}
            </span>
            <p className="text-sm font-mono text-slate-500 tracking-widest">
              {post.date}
            </p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans tracking-tighter uppercase mb-6 drop-shadow-lg">
            {post.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            {post.excerpt}
          </p>
        </div>

        {/* BCM 특화 메인 이미지 연출 (각진 보더 + Glow) */}
        <div className="mb-12 w-full relative aspect-video rounded-sm overflow-hidden border border-amber-900/30 shadow-[0_0_30px_rgba(245,158,11,0.05)] bg-slate-900">
          {post.image ? (
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover opacity-80" 
            />
          ) : (
            // 이미지가 아직 없을 때를 대비한 폼나는 플레이스홀더
            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center font-mono text-slate-600 border border-slate-800 border-dashed">
              <span className="animate-pulse text-amber-500/50 mb-2">●</span>
              NO IMAGE DATA
            </div>
          )}
        </div>

        {/* 전문적인 데이터 æ 폰트모노/산스 상세 내용 렌더링 영역 */}
        <div className="leading-relaxed whitespace-pre-line text-slate-300 font-sans p-8 md:p-12 bg-slate-900 border border-slate-800 shadow-xl text-base md:text-lg">
          {post.content}
        </div>

        {/* 하단 네비게이션 버튼 */}
        <div className="mt-16 pt-10 border-t border-slate-800 flex justify-center">
          <Link href="/blog" className="inline-flex items-center gap-3 px-10 py-4 font-bold font-mono tracking-widest border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            <span className="text-xl pb-1">←</span> VIEW ALL ARCHIVES
          </Link>
        </div>
        
      </article>
    </main>
  );
}