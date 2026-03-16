import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BCM",
  description: "BCM Baseball Club Manager 개인정보처리방침",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-16">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-mono text-sm mb-6 inline-block">← BACK TO HOME</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-mono text-sm">Last Updated: March 1, 2026</p>
        </div>

        <div className="space-y-12 text-slate-400 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">1. Introduction</h2>
            <p>
              AROTECH Studio (&quot;회사&quot;, &quot;우리&quot;)는 BCM - Baseball Club Manager (&quot;게임&quot;, &quot;서비스&quot;)를 이용하는 사용자(&quot;이용자&quot;, &quot;귀하&quot;)의 개인정보를 소중히 여기며, 관련 법령에 따라 개인정보를 보호하고 있습니다.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">2. Collected Information</h2>
            <p className="mb-4">게임 서비스 제공을 위해 다음과 같은 정보를 수집할 수 있습니다:</p>
            <ul className="list-none space-y-3 ml-2">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▸</span>
                <span><strong className="text-white">계정 정보:</strong> 이메일 주소, 닉네임, 비밀번호 (암호화 저장)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▸</span>
                <span><strong className="text-white">기기 정보:</strong> 운영체제, 하드웨어 사양, 고유 기기 식별자</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▸</span>
                <span><strong className="text-white">플레이 데이터:</strong> 게임 내 진행 상황, 설정, 통계 기록</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▸</span>
                <span><strong className="text-white">결제 정보:</strong> 결제 수단 유형, 거래 내역 (카드 번호는 저장하지 않음)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">▸</span>
                <span><strong className="text-white">로그 데이터:</strong> 접속 일시, IP 주소, 오류 로그</span>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">3. Purpose of Use</h2>
            <p className="mb-4">수집된 정보는 다음 목적으로만 사용됩니다:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "서비스 제공", desc: "게임 계정 생성, 로그인, 클라우드 세이브 동기화" },
                { title: "서비스 개선", desc: "버그 수정, 성능 최적화, 신규 기능 개발을 위한 분석" },
                { title: "고객 지원", desc: "문의 응대, 문제 해결, 공지사항 전달" },
                { title: "법적 의무", desc: "관련 법률에 의한 의무 이행 및 분쟁 해결" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-4">
                  <h4 className="text-amber-400 font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">4. Data Retention</h2>
            <p>
              개인정보는 수집 목적이 달성되거나 이용자가 삭제를 요청할 때까지 보관됩니다.
              계정 탈퇴 시 개인정보는 관련 법령에서 정하는 보관 기간(전자상거래법에 따른 거래 기록 5년 등)을 제외하고
              <strong className="text-white"> 30일 이내</strong>에 안전하게 파기됩니다.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">5. Third-Party Sharing</h2>
            <p className="mb-4">
              우리는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우는 예외로 합니다:
            </p>
            <ul className="list-none space-y-2 ml-2">
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>법률에 의해 요구되는 경우 (수사기관 등의 적법한 요청)</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>결제 처리를 위한 안전한 결제 대행사 (Stripe, Steam 등)</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>서비스 운영에 필수적인 클라우드 인프라 제공업체</span></li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">6. Your Rights</h2>
            <p className="mb-4">이용자는 언제든지 다음 권리를 행사할 수 있습니다:</p>
            <ul className="list-none space-y-2 ml-2">
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>개인정보 열람, 정정, 삭제 요청</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>개인정보 처리 정지 요청</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>마케팅 수신 동의 철회</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>계정 삭제 및 데이터 이전 요청</span></li>
            </ul>
            <p className="mt-4">
              권리 행사를 원하시면 <a href="mailto:support@bcm-game.com" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">support@bcm-game.com</a>으로 문의해 주세요.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">7. Security</h2>
            <p>
              회사는 이용자의 개인정보를 보호하기 위해 SSL/TLS 암호화, 접근 권한 제어, 정기 보안 감사 등
              업계 표준의 보안 조치를 적용하고 있습니다. 그러나 인터넷 전송의 특성상 100%의 보안을 보장할 수 없으며,
              보안 사고 발생 시 관련 법령에 따라 즉시 이용자에게 통지합니다.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">8. Cookies & Analytics</h2>
            <p>
              본 웹사이트 및 게임은 서비스 개선을 위해 쿠키 및 유사 추적 기술을 사용할 수 있습니다.
              이용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있으나, 일부 기능 이용이 제한될 수 있습니다.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">9. Changes to This Policy</h2>
            <p>
              본 개인정보처리방침은 법령 변경 또는 서비스 변경에 따라 수정될 수 있습니다.
              변경 사항은 본 페이지에 게시하며, 중요한 변경 시 게임 내 공지 또는 이메일을 통해 별도 안내합니다.
            </p>
          </section>

          {/* 10 */}
          <section className="bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4">10. Contact</h2>
            <p className="mb-2">개인정보 관련 문의사항은 아래로 연락해 주세요:</p>
            <div className="font-mono text-sm space-y-1 text-slate-400">
              <p><span className="text-amber-500">Email:</span> support@bcm-game.com</p>
              <p><span className="text-amber-500">Company:</span> AROTECH Studio</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
