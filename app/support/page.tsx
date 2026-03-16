import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support | BCM",
  description: "BCM Baseball Club Manager 고객 지원",
};

export default function SupportPage() {
  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-16">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-mono text-sm mb-6 inline-block">← BACK TO HOME</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Support</h1>
          <p className="text-slate-500 text-lg">게임 관련 문의, 버그 리포트, 계정 문제 등 어떤 것이든 도와드리겠습니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 연락 방법 카드들 */}
          <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/30 transition-colors">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-slate-400 text-sm mb-4">일반 문의, 계정 관련, 결제 관련 모든 문의를 이메일로 접수하실 수 있습니다.</p>
            <a href="mailto:support@bcm-game.com" className="text-amber-400 hover:text-amber-300 font-mono text-sm underline underline-offset-4">
              support@bcm-game.com
            </a>
            <p className="text-slate-600 text-xs font-mono mt-3">Response time: 1-2 business days</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 hover:border-[#5865F2]/30 transition-colors">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">Discord Community</h3>
            <p className="text-slate-400 text-sm mb-4">실시간으로 개발팀과 소통하고 다른 플레이어들에게 도움을 받을 수 있습니다.</p>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5865F2] hover:text-[#7289da] font-mono text-sm underline underline-offset-4"
            >
              Discord 서버 참여 →
            </a>
            <p className="text-slate-600 text-xs font-mono mt-3">Community-driven, usually within hours</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/30 transition-colors">
            <div className="text-3xl mb-4">🐛</div>
            <h3 className="text-xl font-bold text-white mb-2">Bug Report</h3>
            <p className="text-slate-400 text-sm mb-4">게임 내 버그나 오류를 발견하셨나요? 아래 이메일로 상세 내용을 보내주세요.</p>
            <a href="mailto:bugs@bcm-game.com" className="text-amber-400 hover:text-amber-300 font-mono text-sm underline underline-offset-4">
              bugs@bcm-game.com
            </a>
            <p className="text-slate-600 text-xs font-mono mt-3">Include: OS, steps to reproduce, screenshots</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/30 transition-colors">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-white mb-2">FAQ</h3>
            <p className="text-slate-400 text-sm mb-4">자주 묻는 질문들을 먼저 확인해 보세요. 대부분의 궁금증이 해결될 수 있습니다.</p>
            <Link href="/#faq" className="text-amber-400 hover:text-amber-300 font-mono text-sm underline underline-offset-4">
              FAQ 확인하기 →
            </Link>
          </div>
        </div>

        {/* 버그 리포트 가이드 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">Bug Report Guide</h2>
          <p className="text-slate-400 mb-6">보다 빠른 해결을 위해 버그 리포트 시 다음 정보를 포함해 주세요:</p>
          <div className="bg-slate-900 border border-slate-800 p-6 font-mono text-sm space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold shrink-0">01.</span>
              <span><strong className="text-white">운영 체제 & 사양</strong> — Windows 10/11, macOS, RAM, GPU 등</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold shrink-0">02.</span>
              <span><strong className="text-white">게임 버전</strong> — 설정 &gt; 정보에서 확인 가능</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold shrink-0">03.</span>
              <span><strong className="text-white">재현 단계</strong> — 버그 발생까지의 과정을 순서대로 설명</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold shrink-0">04.</span>
              <span><strong className="text-white">예상 동작 vs 실제 동작</strong> — 어떤 결과를 기대했고 실제로는 어떤 일이 일어났는지</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold shrink-0">05.</span>
              <span><strong className="text-white">스크린샷 / 영상</strong> — 가능하다면 시각 자료 첨부</span>
            </div>
          </div>
        </div>

        {/* 운영 시간 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">Support Hours</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-5 text-center">
              <p className="text-amber-400 font-bold mb-1">Email</p>
              <p className="text-white text-lg font-mono">Mon – Fri</p>
              <p className="text-slate-500 text-sm font-mono">09:00 – 18:00 KST</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 text-center">
              <p className="text-amber-400 font-bold mb-1">Discord</p>
              <p className="text-white text-lg font-mono">24 / 7</p>
              <p className="text-slate-500 text-sm font-mono">Community always active</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 text-center">
              <p className="text-amber-400 font-bold mb-1">Emergency</p>
              <p className="text-white text-lg font-mono">24 / 7</p>
              <p className="text-slate-500 text-sm font-mono">Account security issues</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
