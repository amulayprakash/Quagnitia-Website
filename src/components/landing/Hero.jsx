import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import ContactModal from "../forms/ContactModal";
import TokenQuoteForm from "../forms/TokenQuoteForm";

export default function Hero({ isDark, theme }) {
  const [scrollY, setScrollY] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showTokenForm, setShowTokenForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0" style={{ backgroundColor: theme.bg }}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: "2px",
                height: "2px",
                backgroundColor: theme.accent,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  5 + Math.random() * 10
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.accent}15`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: `${theme.accent}10`,
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Micro-tagline */}
          <div
            className="text-sm font-medium tracking-wide"
            style={{ color: theme.muted }}
          >
            Growing Together · Customer · Company · Co-worker · Community
          </div>

          {/* Main heading */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span style={{ color: theme.text }}>Two Decades of Excellence.</span>
            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.accent}, ${theme.text})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Leading the AI &
            </span>

            <br />
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.accent}, ${theme.text})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web3 Revolution
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: theme.muted }}
          >
            Bridging the gap between legacy stability and future innovation. We deliver enterprise-grade{" "}
            <span style={{ color: theme.accent, fontWeight: "600" }}>
              AI and Blockchain solutions
            </span>
            {" "}backed by two decades of software mastery.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => setShowContactModal(true)}
              className="group"
              style={{
                backgroundColor: theme.accent,
                color: "#FFFFFF",
                borderRadius: "8px",
                padding: "0 32px",
                height: "56px",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
              }}
            >
              <Calendar className="w-5 h-5 mr-2" strokeWidth={1.5} />
              Schedule Strategy Call
              <ArrowRight
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: "transparent",
                color: theme.text,
                border: `1px solid ${theme.border}`,
                borderRadius: "8px",
                padding: "0 32px",
                height: "56px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              <FileText className="w-5 h-5 mr-2" strokeWidth={1.5} />
              Explore Solutions
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="pt-12 flex flex-wrap justify-center gap-8"
            style={{ color: theme.muted }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.text }}>
                50+
              </div>
              <div className="text-sm">Blockchain Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.text }}>
                10+
              </div>
              <div className="text-sm">Networks Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: theme.text }}>
                24/7
              </div>
              <div className="text-sm">Global Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{ border: `2px solid ${theme.border}` }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: theme.accent }}
          />
        </div>
      </div>

      {/* Modals */}
      <ContactModal
        open={showContactModal}
        onOpenChange={setShowContactModal}
        isDark={isDark}
        theme={theme}
      />
      <TokenQuoteForm
        open={showTokenForm}
        onOpenChange={setShowTokenForm}
        isDark={isDark}
        theme={theme}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
      `}</style>
    </section>
  );
}
