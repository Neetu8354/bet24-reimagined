import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA, WA_LINK } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket, Target, Gift } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import aviatorImg from "@/assets/promo-arcade.jpg";
import aviatorImg2 from "@/assets/card-roulette.jpg";

const STEPS = [
  { icon: Rocket, title: "Place Your Bet", desc: "Choose your bet amount before the plane takes off." },
  { icon: Target, title: "Cash Out Smart", desc: "Watch the multiplier rise and cash out before it crashes." },
  { icon: Gift, title: "Win Big Rewards", desc: "Hit 10x or more with smart timing and strategy." },
];

const Aviator = () => {
  useSeo({
    title: "Play Aviator on Khelo24App.live | Crash Game",
    description: "Play Aviator crash game on Khelo24App.live and win big with smart cash outs.",
    canonical: "/aviator",
    keywords: "aviator game online, crash game, khelo24app aviator, play aviator",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Aviator" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Aviator on <span className="text-gradient-gold">Khelo24App.live</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">The most exciting crash game — place your bet, watch the multiplier rise, and cash out before it crashes!</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <img src={aviatorImg} alt="Aviator crash game interface showing plane taking off with multiplier tracking on Khelo24App" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <img src={aviatorImg2} alt="Aviator game dashboard showing betting history and cash out statistics on Khelo24App" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
        </div>

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

        <div className="bg-card/50 border border-border rounded-2xl p-6 md:p-10 text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-lg md:text-xl font-bold mb-2">How to Win Aviator 10x with Khelo24App.live</h3>
          <p className="text-muted-foreground text-sm mb-6">Master the timing, use our live stats dashboard, and join thousands of winners every day.</p>
          <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" /> Play Aviator Now
            </a>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-3">
            The <strong className="text-foreground">Aviator crash game</strong> on <strong className="text-foreground">khelo24app.live</strong> offers thrilling instant-win gameplay with provably fair mechanics. Watch real-time statistics, track multipliers, and use auto cash-out features to maximize your winnings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Perfect for both beginners and experienced players, our Aviator game features live chat, detailed betting history, and instant withdrawals. Join thousands of players winning daily with multipliers reaching 100x and beyond.
          </p>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/cricket", label: "Live Cricket Betting" }, { to: "/teen-patti", label: "Play Teen Patti Online" }, { to: "/blog/best-online-sports-betting-platform-for-beginners", label: "Best Platform for Beginners" }, { to: "/blog/how-to-join-online-sports-gaming-website", label: "How to Join & Start Playing" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Aviator;
