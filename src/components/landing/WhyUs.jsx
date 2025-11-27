import React from "react";
import { ShieldCheck, TrendingUp, Users, AlertTriangle, Zap, Clock } from "lucide-react";

export default function WhyUs({ isDark, theme }) {
  return (
    <section id="why-us" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
          >
            The Quagnitia Advantage
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.muted }}
          >
            Why 24 Years of Experience Matters in AI & Web3
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Veterans Card */}
          <div
            className="rounded-2xl p-8 border-2 relative overflow-hidden group"
            style={{
              backgroundColor: `${theme.accent}05`,
              borderColor: theme.accent,
            }}
          >
             <div
                className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl text-sm font-bold"
                style={{ backgroundColor: theme.accent, color: "#fff" }}
              >
                VETERANS
              </div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: theme.text }}>
              <ShieldCheck className="w-8 h-8" style={{ color: theme.accent }} />
              Quagnitia Systems
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                    <ShieldCheck className="w-5 h-5" style={{ color: theme.accent }} />
                </div>
                <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.text }}>Security First</h4>
                    <p style={{ color: theme.muted }}>Battle-tested protocols and enterprise-grade security standards honed over two decades.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                    <TrendingUp className="w-5 h-5" style={{ color: theme.accent }} />
                </div>
                <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.text }}>Scalable Architecture</h4>
                    <p style={{ color: theme.muted }}>Systems built to handle millions of users, not just a proof-of-concept.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="mt-1">
                    <Users className="w-5 h-5" style={{ color: theme.accent }} />
                </div>
                <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.text }}>Long-term Partnership</h4>
                    <p style={{ color: theme.muted }}>We've been here for 24 years. We are your partners for the long haul.</p>
                </div>
              </div>
            </div>
          </div>

          {/* New Agencies Card */}
          <div
            className="rounded-2xl p-8 border relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity"
            style={{
              backgroundColor: theme.card,
              borderColor: theme.border,
            }}
          >
             <div
                className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl text-sm font-bold"
                style={{ backgroundColor: theme.border, color: theme.muted }}
              >
                TYPICAL AGENCIES
              </div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: theme.muted }}>
              <AlertTriangle className="w-8 h-8" />
              New Agencies
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                    <Zap className="w-5 h-5" style={{ color: theme.muted }} />
                </div>
                <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.muted }}>Move Fast, Break Things</h4>
                    <p style={{ color: theme.muted }}>High risk of security vulnerabilities and unstable codebases.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                    <AlertTriangle className="w-5 h-5" style={{ color: theme.muted }} />
                </div>
                <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.muted }}>Hype-Driven</h4>
                    <p style={{ color: theme.muted }}>Focus on trends over substance, often leading to technical debt.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="mt-1">
                    <Clock className="w-5 h-5" style={{ color: theme.muted }} />
                </div>
                <div>
                    <h4 className="font-bold text-lg" style={{ color: theme.muted }}>Short-Term Focus</h4>
                    <p style={{ color: theme.muted }}>Often disappear when the market cools down or the project ends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
