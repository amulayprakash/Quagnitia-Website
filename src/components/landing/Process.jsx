import React from "react";
import {
  Search,
  FileCode,
  Smartphone,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "Requirements analysis, market research, feasibility study, and architectural planning.",
    deliverable:
      "Technical specification document, project roadmap, strategic plan",
  },
  {
    icon: FileCode,
    title: "Algorithm Design & Architecture",
    description:
      "System design, smart contract/algorithm development, and security-first engineering.",
    deliverable:
      "System architecture, audited code, algorithm specifications",
  },
  {
    icon: Smartphone,
    title: "Integration & Development",
    description:
      "Full-stack development, API integration, and seamless user interface implementation.",
    deliverable:
      "Responsive application, mobile app, API documentation",
  },
  {
    icon: ShieldCheck,
    title: "Security Audit & QA",
    description:
      "Rigorous testing, security audits, penetration testing, and performance optimization.",
    deliverable:
      "Audit reports, QA test results, performance metrics",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description:
      "Production deployment, monitoring, and ongoing maintenance and optimization.",
    deliverable:
      "Live deployment, monitoring dashboard, support SLA",
  },
];

export default function Process({ isDark, theme }) {
  return (
    <section id="process" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
          >
            How We Deliver
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.muted }}
          >
            A battle-tested methodology from concept to production
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute left-10 top-24 w-0.5 h-12"
                  style={{
                    background: `linear-gradient(to bottom, ${theme.border}, transparent)`,
                  }}
                />
              )}

              <div
                className="rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {/* Use column on mobile (centered) and row on md+ (left aligned) */}
                <div className="flex flex-col md:flex-row gap-6 text-center md:text-left items-center md:items-start">
                  {/* Icon block */}
                  <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto md:mx-0"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accent}10)`,
                        border: `1px solid ${theme.accent}30`,
                      }}
                    >
                      <step.icon
                        className="w-10 h-10"
                        strokeWidth={1.5}
                        style={{ color: theme.accent }}
                      />
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          backgroundColor: theme.accent,
                          color: "#FFFFFF",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left"
                        style={{
                          color: theme.text,
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="leading-relaxed text-center md:text-left"
                        style={{ color: theme.muted }}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div
                      className="rounded-lg px-4 py-3 mx-auto md:mx-0 text-center md:text-left max-w-[90%] md:max-w-none"
                      style={{
                        backgroundColor: `${theme.accent}10`,
                        border: `1px solid ${theme.accent}30`,
                      }}
                    >
                      <div
                        className="text-xs font-semibold mb-1 uppercase tracking-wide"
                        style={{ color: theme.accent }}
                      >
                        Deliverable:
                      </div>
                      <div className="text-sm" style={{ color: theme.text }}>
                        {step.deliverable}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
