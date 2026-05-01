import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket, Target, Gift } from "lucide-react";
import { useEffect } from "react";

const STEPS = [
  { icon: Rocket, title: "Place Your Bet", desc: "Choose your bet amount before the plane takes off." },
  { icon: Target, title: "Cash Out Smart", desc: "Watch the multiplier rise and cash out before it crashes." },
  { icon: Gift, title: "Win Big Rewards", desc: "Hit 10x or more with smart timing and strategy." },
];

const Aviator = () => {
  useEffect(() => {
    document.title = "Play Aviator on Khelo24Login.live | Crash Game";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Play Aviator crash game on Khelo24Login.live and win big with smart cash outs.");
  }, []);

  return (
    <main>
      <Header />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Aviator on <span className="text-gradient-gold">Khelo24Login.live</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">The most exciting crash game — place your bet, watch the multiplier rise, and cash out before it crashes!</p>

        <h2 className="text-xl md:text-2xl font-bold mb-6">How to Play Aviator</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {STEPS.map((s, i) => (
            <div key={s.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all relative">
              <span className="absolute top-3 right-3 text-3xl font-black text-muted-foreground/20">{i + 1}</span>
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card/50 border border-border rounded-2xl p-6 md:p-10 text-center max-w-2xl mx-auto">
          <h3 className="text-lg md:text-xl font-bold mb-2">How to Win Aviator 10x with Khelo24Login.live</h3>
          <p className="text-muted-foreground text-sm mb-6">Master the timing, use our live stats dashboard, and join thousands of winners every day.</p>
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Play Aviator Now
          </Button>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Aviator;
