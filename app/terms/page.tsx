import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BCM",
  description: "BCM Baseball Club Manager 서비스 이용약관",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-slate-950 text-slate-300 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-16">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-mono text-sm mb-6 inline-block">← BACK TO HOME</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-500 font-mono text-sm">Last Updated: March 1, 2026 &nbsp;|&nbsp; Effective: March 15, 2026</p>
        </div>

        <div className="space-y-12 text-slate-400 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">1. Agreement to Terms</h2>
            <p>
              본 서비스 이용약관(&quot;약관&quot;)은 AROTECH Studio(&quot;회사&quot;)가 제공하는 BCM - Baseball Club Manager(&quot;게임&quot;) 및
              관련 웹사이트, 서비스 전반에 적용됩니다. 서비스에 접속하거나 이용하는 것은 본 약관에 동의하는 것으로 간주됩니다.
              본 약관에 동의하지 않는 경우, 서비스를 이용하실 수 없습니다.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">2. Service Description</h2>
            <p>
              BCM은 야구 구단 경영 시뮬레이션 게임으로, 선수 스카우팅, 재정 관리, 리그 운영 등의 기능을 제공합니다.
              회사는 서비스의 품질 향상을 위해 사전 고지 후 서비스 내용을 변경하거나 업데이트할 수 있습니다.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">3. Account</h2>
            <div className="space-y-4">
              <p>
                서비스 이용을 위해 계정을 생성해야 할 수 있습니다. 이용자는 다음 사항에 동의합니다:
              </p>
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>정확하고 최신의 정보를 제공할 것</span></li>
                <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>계정 보안(비밀번호 등)을 본인이 관리할 것</span></li>
                <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>타인에게 계정을 양도하거나 공유하지 않을 것</span></li>
                <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>계정에서 발생하는 모든 활동에 대해 책임질 것</span></li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">4. User Conduct</h2>
            <p className="mb-4">이용자는 서비스 이용 시 다음 행위를 해서는 안 됩니다:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "게임 해킹, 치팅, 비인가 프로그램 사용",
                "게임 데이터의 무단 수정 또는 역공학",
                "다른 이용자에 대한 괴롭힘, 사기, 사칭",
                "서비스 운영을 방해하는 행위 (DDoS 등)",
                "게임 내 재화 또는 계정의 현금 거래",
                "저작권 및 지적재산권 침해 행위",
              ].map((rule, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 px-4 py-3 flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm">✕</span>
                  <span className="text-sm">{rule}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">5. Intellectual Property</h2>
            <p>
              게임의 모든 콘텐츠(코드, 그래픽, 음악, 텍스트, 인터페이스 디자인, 데이터베이스 등)에 대한
              저작권 및 지적재산권은 회사에 귀속됩니다. 이용자는 서비스 이용 목적 범위 내에서만
              콘텐츠를 이용할 수 있으며, 회사의 사전 서면 동의 없이 복제, 배포, 수정, 상업적 이용을 할 수 없습니다.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">6. In-Game Purchases</h2>
            <p className="mb-4">
              게임 내 유료 콘텐츠 구매 시 다음 조건이 적용됩니다:
            </p>
            <ul className="list-none space-y-2 ml-2">
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>모든 구매는 최종적이며, 법률에서 정한 경우를 제외하고 환불이 제한될 수 있습니다.</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>가상 화폐 및 아이템은 이용자에게 라이선스되는 것이며, 소유권이 이전되는 것이 아닙니다.</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">▸</span><span>서비스 종료 시 미사용 가상 화폐에 대한 보상 정책을 별도로 안내합니다.</span></li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">7. Termination</h2>
            <p>
              회사는 이용자가 본 약관을 위반하거나, 서비스 운영에 심각한 지장을 초래하는 경우
              사전 경고 후 계정을 정지하거나 종료할 수 있습니다.
              이용자는 언제든지 계정 삭제를 요청하여 서비스 이용을 중단할 수 있으며,
              삭제 요청은 <a href="mailto:support@bcm-game.com" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">support@bcm-game.com</a>을 통해 처리됩니다.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">8. Disclaimer</h2>
            <div className="bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm">
                서비스는 &quot;있는 그대로(AS IS)&quot; 제공되며, 회사는 서비스의 무중단, 무오류를 보장하지 않습니다.
                서버 점검, 네트워크 장애, 천재지변 등 불가항력에 의한 서비스 중단에 대해 회사는 책임을 지지 않습니다.
                다만, 회사는 서비스의 안정적 운영을 위해 최선의 노력을 다합니다.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">9. Governing Law</h2>
            <p>
              본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련된 분쟁은 회사의 본사 소재지를 관할하는
              법원을 전속적 합의관할 법원으로 합니다.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-500 pl-4">10. Changes to Terms</h2>
            <p>
              회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 게임 내 공지 또는 이메일을 통해
              최소 <strong className="text-white">7일 전</strong>에 고지합니다. 변경된 약관에 동의하지 않는 이용자는
              서비스 이용을 중단하고 계정 삭제를 요청할 수 있습니다.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <p className="mb-2">약관 관련 문의사항은 아래로 연락해 주세요:</p>
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
