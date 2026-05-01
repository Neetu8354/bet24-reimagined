import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "How to Login Khelo24Login Step by Step Guide 2026";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Complete step by step guide on how to login khelo24login with username.");
  }, []);

  return (
    <main>
      <Header />
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          How to Login Khelo24Login <span className="text-gradient-gold">Step by Step Guide 2026</span>
        </h1>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Easy Login Process</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you're new and searching <strong className="text-foreground">how to login khelo24login with username</strong>, this <strong className="text-foreground">khelo24login login guide step by step</strong> makes it very simple to access the <strong className="text-foreground">online sports gaming platform</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Step-by-Step Instructions</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
              <div>
                <h3 className="font-bold mb-1">Visit the website and enter your credentials</h3>
                <p className="text-sm text-muted-foreground">Go to Khelo24Login.live and enter your username and password in the login form.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
              <div>
                <h3 className="font-bold mb-1">Complete verification and start playing</h3>
                <p className="text-sm text-muted-foreground">Verify your account via WhatsApp and you're ready to play all games instantly.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Blog;
