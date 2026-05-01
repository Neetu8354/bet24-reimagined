import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsBar } from "@/components/StatsBar";
import { WinnersTicker } from "@/components/WinnersTicker";
import { TrustSection } from "@/components/TrustSection";
import { PopularGames } from "@/components/PopularGames";
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
    document.title = "Play Online Games on Khelo24Login.live | Fast Withdrawal | 24x7 Support";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Khelo24Login.live - Best online sports gaming platform in India. Get free cricket ID instantly, play live cricket betting, Aviator, Teen Patti with fast withdrawals and 24x7 support.");
    setMeta("keywords", "khelo24login, khelo24login.live, online sports gaming platform, free cricket id, live cricket betting, aviator game, teen patti online, fast withdrawal betting, safe online sports betting");
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement("link"); canon.setAttribute("rel", "canonical"); document.head.appendChild(canon); }
    canon.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main>
      <Header />
      <h1 className="sr-only">Play Online Games on Khelo24Login.live</h1>
      <HeroSlider />
      <StatsBar />
      <WinnersTicker />
      <TrustSection />
      <PopularGames />
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
