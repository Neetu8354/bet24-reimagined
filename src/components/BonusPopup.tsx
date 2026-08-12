import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { WA_LINK } from "@/lib/wa";

export const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure page is loaded
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
      />

      {/* Centered popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm mx-4 animate-in fade-in zoom-in duration-300">
        <div className="bg-gradient-to-br from-background to-card border-2 border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-all z-10"
            aria-label="Close popup"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Gift icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-gold/20 border-2 border-gradient-gold flex items-center justify-center">
                <Gift className="h-8 w-8 text-gradient-gold" />
              </div>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              <span className="text-gradient-gold">100%</span> BONUS
            </h2>

            {/* Supporting text */}
            <p className="text-muted-foreground text-lg mb-8">
              Claim your 100% bonus now!
            </p>

            {/* WhatsApp CTA button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-5.02 5.97-5.02 9.981 0 1.396.264 2.823.786 4.171l-1.24 4.738 4.86-1.271c1.26.736 2.786 1.124 4.415 1.124 5.975 0 10.816-4.843 10.816-10.806 0-2.882-1.162-5.585-3.355-7.647a10.02 10.02 0 00-6.861-2.887z" />
              </svg>
              CLICK HERE — WHATSAPP
            </a>

            {/* Subtext */}
            <p className="text-xs text-muted-foreground mt-6">
              Limited time offer. Claim now!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
