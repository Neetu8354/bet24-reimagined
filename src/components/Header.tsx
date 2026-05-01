import { Button } from "@/components/ui/button";
import { openWA } from "@/lib/wa";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = ["Cricket", "Live Casino", "Andar Bahar", "Teen Patti", "Roulette", "Promotions"];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <button onClick={openWA} className="flex items-center gap-2 group" aria-label="Khelo24Bet home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-neon shadow-glow">
            <span className="font-black text-sm text-primary-foreground">K24</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg tracking-tight">
              <span className="text-primary">Khelo</span>
              <span className="text-secondary">24Bet</span>
            </span>
            <span className="text-[10px] text-muted-foreground">Cricket • Casino • Live</span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n}
              onClick={openWA}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth rounded-md hover:bg-muted"
            >
              {n}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button onClick={openWA} variant="outline" size="sm" className="hidden sm:flex">
            Login
          </Button>
          <Button onClick={openWA} size="sm" className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold font-bold">
            <MessageCircle className="h-4 w-4 mr-1" /> Join
          </Button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <button key={n} onClick={openWA} className="text-left px-3 py-2.5 rounded-md hover:bg-muted text-sm font-medium">
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
