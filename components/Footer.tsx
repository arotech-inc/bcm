import Link from "next/link";
import Image from "next/image";

export default function BcmFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <Image src="/logo.png" alt="BCM Baseball Club Manager" width={140} height={36} className="object-contain mb-4" />
          <p className="text-slate-500 text-sm max-w-sm mb-6">
            The most authentic baseball front office simulation experience. Built for true baseball fans and data enthusiasts.
          </p>
          <Link href="https://corporate-xi-six.vercel.app/" className="inline-block text-xs font-mono text-amber-500/70 hover:text-amber-400 border border-amber-500/30 px-4 py-2 rounded-sm">
            ← BACK TO AROTECH
          </Link>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">GAME</h5>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="#overview" className="hover:text-amber-400">Overview</Link></li>
            <li><Link href="#features" className="hover:text-amber-400">Features</Link></li>
            <li><Link href="#blog" className="hover:text-amber-400">Dev Blog</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">LEGAL</h5>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/privacy" className="hover:text-amber-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-amber-400">Terms of Service</Link></li>
            <li><Link href="mailto:support@bcm-game.com" className="hover:text-amber-400">Contact Support</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 text-center flex flex-col items-center">
        <p className="text-slate-600 font-mono text-xs">
          © 2026 AROTECH Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}