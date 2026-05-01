import { openWA } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const COLS = [
  { title: "Cricket", links: ["IPL Fantasy", "T20 World Cup", "ODI Series", "Live Scores", "Predictions"] },
  { title: "Casino", links: ["Andar Bahar", "Teen Patti", "Roulette", "Dragon Tiger", "32 Cards"] },
  { title: "Account", links: ["Get ID", "Deposit", "Withdraw", "Bonuses", "VIP Club"] },
  { title: "Help", links: ["Contact Us", "WhatsApp Bot", "Responsible Gaming", "Terms", "Privacy"] },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card/40 mt-10">
    <div className="container py-12 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
      <div className="lg:col-span-2">
        <button onClick={openWA} className="flex items-center gap-2 mb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-neon shadow-glow">
            <span className="font-black text-sm text-primary-foreground">K24</span>
          </div>
          <span className="font-black text-lg">
            <span className="text-primary">Khelo</span><span className="text-secondary">24Bet</span>
          </span>
        </button>
        <p className="text-sm text-muted-foreground mb-4">India's most trusted cricket and live casino destination. WhatsApp-first, INR-only, instant payouts.</p>
        <button onClick={openWA} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:opacity-90">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </button>
      </div>
      {COLS.map((c) => (
        <div key={c.title}>
          <h4 className="font-bold mb-3">{c.title}</h4>
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l}>
                <button onClick={openWA} className="text-sm text-muted-foreground hover:text-primary transition-smooth">{l}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Khelo24Bet. 18+ only. Play responsibly.</p>
        <p>Powered by Reddy Anna Official Desk • Contact via WhatsApp</p>
      </div>
    </div>
  </footer>
);
