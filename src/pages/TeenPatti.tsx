import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import cardTeen from "@/assets/card-teenpatti.jpg";

const TeenPatti = () => {
  useEffect(() => {
    document.title = "Play Teen Patti Online on Khelo24Login.live";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Enjoy Teen Patti online on Khelo24Login.live - India's favourite card game.");
  }, []);

  return (
    <main>
      <Header />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Teen Patti on <span className="text-gradient-gold">Khelo24Login.live</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">India's favourite card game — play live with real dealers, 24/7 in INR.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardTeen} alt="bet on gameplay interface with khelo24login.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Rules and Strategies</h2>
            <p className="text-muted-foreground mb-3">Teen Patti is a 3-card poker game. Each player gets three cards, and the goal is to have the best hand. Rankings go from Trail (three of a kind) at the top to High Card at the bottom.</p>
            <h3 className="font-bold mb-2 text-sm">Bet on Gameplay Interface with Khelo24Login.live</h3>
            <p className="text-muted-foreground text-sm mb-4">Our smooth interface lets you place bets quickly, view live dealer cards, and track your winnings in real time.</p>
            <Button onClick={openWA} className="bg-gradient-gold text-gold-foreground font-bold">
              <MessageCircle className="h-4 w-4 mr-2" /> Play Teen Patti Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TeenPatti;
