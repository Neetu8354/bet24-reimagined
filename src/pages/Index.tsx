import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsBar } from "@/components/StatsBar";
import { WinnersTicker } from "@/components/WinnersTicker";
import { GameSections } from "@/components/GameSections";
import { LiveScores } from "@/components/LiveScores";
import { Promotions } from "@/components/Promotions";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PaymentBar } from "@/components/PaymentBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Khelo24Bet — Online Cricket ID & Live Casino in India | WhatsApp 24x7";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Get your Khelo24Bet cricket ID on WhatsApp in 60 seconds. IPL fantasy, live cricket scores, Andar Bahar, Teen Patti, Roulette. INR deposits, instant payouts, 24x7 support.");
    setMeta("keywords", "khelo24bet, cricket id, ipl fantasy india, andar bahar, teen patti, online casino india, whatsapp cricket id, reddy anna");
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement("link"); canon.setAttribute("rel", "canonical"); document.head.appendChild(canon); }
    canon.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main>
      <Header />
      <h1 className="sr-only">Khelo24Bet — Online Cricket ID & Live Casino in India</h1>
      <HeroSlider />
      <StatsBar />
      <WinnersTicker />
      <GameSections />
      <LiveScores />
      <Promotions />
      <WhatsAppCTA />
      <PaymentBar />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
