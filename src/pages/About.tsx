import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA, WA_LINK } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Smartphone, Zap, Headphones, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import aboutImg from "@/assets/promo-live.jpg";

const FEATURES = [
  { icon: ShieldCheck, title: "Safe Online Sports Betting Websites 2026", desc: "Fully encrypted platform with secure transactions and verified gameplay." },
  { icon: Smartphone, title: "Mobile Friendly Sports Betting Platforms", desc: "Optimized for all devices — bet anywhere, anytime from your phone." },
  { icon: Zap, title: "Fast Payouts", desc: "Withdrawals processed in under 5 minutes directly to your bank." },
  { icon: Headphones, title: "24x7 Support", desc: "Always available via WhatsApp in Hindi, English, Telugu & Tamil." },
];

const About = () => {
  useSeo({
    title: "About Us – Khelo24App.live | Trusted Online Sports Gaming Platform",
    description: "Khelo24App.live is a safe and reliable online sports gaming platform in India with fast payouts and 24x7 support.",
    canonical: "/about",
    keywords: "khelo24app about, online sports gaming platform india, safe betting platform",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          About <span className="text-gradient-gold">Khelo24App.live</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              A modern <strong className="text-foreground">online sports gaming platform</strong> built for Indian players who want a clean and fast betting experience. We combine cutting-edge technology with deep understanding of what Indian gamers need.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide one of the best <strong className="text-foreground">sports betting platform online</strong> with secure gameplay and excellent support. Every feature we build is designed to make your gaming experience seamless and rewarding.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black mt-14 mb-8">
          Key <span className="text-gradient-gold">Features</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <img src={aboutImg} alt="Khelo24App.live platform interface showing cricket betting, casino games, and WhatsApp support features" className="rounded-xl border border-border w-full max-w-3xl mx-auto aspect-video object-cover mb-8" loading="lazy" />

          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Why Khelo24App.live Is the Best Choice</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Khelo24App.live stands out as a trusted Indian gaming platform with comprehensive features. From live cricket betting with real-time odds to popular casino games like Teen Patti and Aviator, we offer diverse entertainment options tailored for Indian players.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform excels with instant UPI deposits starting from ₹100, withdrawals processed in under 5 minutes, and dedicated WhatsApp support in multiple languages. Whether you're new to online gaming or an experienced player, Khelo24App.live provides a secure, user-friendly environment with verified fair gameplay.
            </p>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" /> Join Now on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Crash Game" }, { to: "/teen-patti", label: "Play Teen Patti Online" }, { to: "/blog", label: "Read Our Gaming Guides" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default About;
