import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { openWA, WA_LINK } from "@/lib/wa";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowRight } from "lucide-react";
import hero from "@/assets/hero-cricket.jpg";
import promoFantasy from "@/assets/promo-fantasy.jpg";
import promoLive from "@/assets/promo-live.jpg";
import promoArcade from "@/assets/promo-arcade.jpg";

const SLIDES = [
  { img: hero, eyebrow: "IPL 2026 LIVE", title: "Cricket. Live. Unmissable.", sub: "Join the biggest cricket community on WhatsApp. Get instant updates, predictions and exclusive bonuses.", alt: "Live IPL cricket betting on Khelo24App" },
  { img: promoFantasy, eyebrow: "FANTASY CRICKET", title: "Pick Your XI. Win ₹10 Lakh.", sub: "Daily fantasy contests on every match. Skill-based scoring, instant results.", alt: "Fantasy cricket contests with prize pool on Khelo24App" },
  { img: promoLive, eyebrow: "LIVE SCORES", title: "Every Ball. Every Moment.", sub: "Real-time scoreboards, ball-by-ball commentary and ML-powered predictions.", alt: "Live cricket scores and ball-by-ball commentary on Khelo24App" },
  { img: promoArcade, eyebrow: "PREMIUM CASINO", title: "Andar Bahar • Teen Patti • Roulette", sub: "Authentic Indian casino games with live dealers, 24/7 in INR.", alt: "Premium casino games - Andar Bahar, Teen Patti, Roulette on Khelo24App" },
];

export const HeroSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[78vh] min-h-[520px] sm:h-[68vh] md:h-[88vh] md:min-h-[640px] w-full">
        {SLIDES.map((sl, idx) => (
          <img
            key={idx}
            src={sl.img}
            alt={sl.alt}
            width={1920}
            height={800}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30 md:to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 md:via-transparent to-transparent" />

        <div className="container relative z-10 flex h-full items-center pb-16 md:pb-0">
          <div className="max-w-2xl space-y-3 md:space-y-4 animate-float">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-[10px] sm:text-xs font-bold tracking-widest">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" /> {s.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
              {s.title.split(" ").map((w, k) => (
                <span key={k} className={k % 3 === 1 ? "text-gradient-gold" : ""}>{w} </span>
              ))}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl">{s.sub}</p>
            <div className="flex flex-col gap-4 pt-2 max-w-[280px] mx-auto items-center">
              <Button asChild size="lg" className="w-full bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold font-black text-base sm:text-lg rounded-2xl h-12">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Play Now <ArrowRight className="h-5 w-5 ml-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full bg-background border-2 border-gold text-gold hover:bg-gold/10 font-black text-base sm:text-lg rounded-2xl h-12">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Join &amp; Win Big
                </a>
              </Button>
            </div>
          </div>
        </div>

        <button onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)} className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/60 backdrop-blur border border-border items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth" aria-label="Previous">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={() => setI((p) => (p + 1) % SLIDES.length)} className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/60 backdrop-blur border border-border items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth" aria-label="Next">
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
