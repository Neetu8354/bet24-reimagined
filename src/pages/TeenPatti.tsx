import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA, WA_LINK } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import cardTeen from "@/assets/card-teenpatti.jpg";

const TeenPatti = () => {
  useSeo({
    title: "Play Teen Patti Online on Khelo24App.live",
    description: "Enjoy Teen Patti online on Khelo24App.live - India's favourite card game.",
    canonical: "/teen-patti",
    keywords: "teen patti online, khelo24app teen patti, play teen patti, indian card game",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Teen Patti" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Teen Patti on <span className="text-gradient-gold">Khelo24App.live</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">India's favourite card game — play live with real dealers, 24/7 in INR.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardTeen} alt="Teen Patti card game interface showing live dealer and betting table on Khelo24App" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Rules and Strategies</h2>
            <p className="text-muted-foreground mb-3">Teen Patti is a 3-card poker game. Each player gets three cards, and the goal is to have the best hand. Rankings go from Trail (three of a kind) at the top to High Card at the bottom.</p>
            <h3 className="font-bold mb-2 text-sm">Smooth Teen Patti Interface</h3>
            <p className="text-muted-foreground text-sm mb-4">Our intuitive interface lets you place bets quickly, view live dealer cards, and track your winnings in real time.</p>
            <Button asChild className="bg-gradient-gold text-gold-foreground font-bold">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" /> Play Teen Patti Now
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Play Teen Patti on Khelo24App.live</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong className="text-foreground">Teen Patti online</strong> on <strong className="text-foreground">khelo24app.live</strong> brings India's favourite card game to your fingertips. Our platform features professional live dealers, instant UPI deposits starting from ₹100, and rapid withdrawals so you can enjoy your winnings without delay.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Experience authentic Teen Patti with multiple betting tables, side bets, and real-time chat features. Play 24/7 in Hindi, English, Telugu and Tamil with verified fair gameplay and round-the-clock WhatsApp support.
          </p>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/aviator", label: "Play Aviator Crash Game" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/blog/safe-online-sports-betting-websites-2026", label: "Safe Betting Websites 2026" }, { to: "/blog/mobile-friendly-sports-betting-platforms", label: "Mobile Friendly Platforms" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TeenPatti;
