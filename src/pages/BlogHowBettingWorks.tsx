import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import blogImg from "@/assets/promo-arcade.jpg";

const BlogHowBettingWorks = () => {
  useEffect(() => {
    document.title = "How Sports Betting Platforms Work Online 2026 | Khelo24Login.live";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Learn how sports betting platforms work online. Understand odds, deposits, withdrawals and gameplay on Khelo24Login.live.");
  }, []);

  return (
    <main>
      <Header />
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          How Sports Betting Platforms <span className="text-gradient-gold">Work Online</span>
        </h1>

        <img src={blogImg} alt="gaming tips blog for khelo24login.live" className="rounded-xl border border-border w-full aspect-video object-cover mb-8" loading="lazy" />

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Understanding Online Sports Betting</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ever wondered <strong className="text-foreground">how sports betting platforms work online</strong>? It's simpler than you think. An <strong className="text-foreground">online sports gaming platform</strong> like Khelo24Login.live connects you to live sporting events where you can predict outcomes and win money based on odds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The process on our <strong className="text-foreground">sports betting platform online</strong> is straightforward: you create an account, deposit funds, choose a game or match, place your bet, and if your prediction is correct — you win! Withdrawals are processed in under 5 minutes on this <strong className="text-foreground">live sports betting site</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Key Components of a Betting Platform</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-1">Odds & Markets</h3>
              <p className="text-sm text-muted-foreground">Odds represent the probability of an outcome. Higher odds = bigger payout but lower chance. Our <strong>online betting website</strong> offers competitive odds across all sports.</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-1">Deposits & Withdrawals</h3>
              <p className="text-sm text-muted-foreground">On Khelo24Login.live, deposit via UPI, IMPS or Net Banking (min ₹100). Withdrawals happen in under 5 minutes.</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-1">Live Betting</h3>
              <p className="text-sm text-muted-foreground">Place bets while the match is in progress. Odds change in real-time on our <strong>sports gaming app online</strong> based on match conditions.</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <h3 className="font-bold mb-1">Customer Support</h3>
              <p className="text-sm text-muted-foreground">A good <strong>safe online sports betting website</strong> offers 24x7 support. Khelo24Login provides WhatsApp assistance round the clock.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Why Khelo24Login Is Different</h2>
          <p className="text-muted-foreground leading-relaxed">
            Most <strong className="text-foreground">online betting websites</strong> are complex and confusing. Khelo24Login.live is built for Indian players with a WhatsApp-first approach, INR-only transactions, and one of the fastest withdrawal systems among <strong className="text-foreground">mobile friendly sports betting platforms</strong>.
          </p>
        </section>

        <div className="text-center mt-8">
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Try It Now on WhatsApp
          </Button>
        </div>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogHowBettingWorks;
