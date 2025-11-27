import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import About from "../components/landing/About";
import WhyUs from "../components/landing/WhyUs";
import Process from "../components/landing/Process";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

import { useLayoutContext } from "./Layout";

export default function Home() {
  const { isDark, theme } = useLayoutContext();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    document.title =
      " Quagnitia Systems Pvt. Ltd. - Blockchain & Mobile App Development | Token Launches, DeFi, NFT & Web3 Solutions";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Leading blockchain and mobile app development company. Expert token launches, DeFi platforms, DAO architecture, NFT marketplaces, Web3 gaming, and enterprise applications."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Leading blockchain and mobile app development company. Expert token launches, DeFi platforms, DAO architecture, NFT marketplaces, Web3 gaming, and enterprise applications.";
      document.head.appendChild(meta);
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Quagnitia Systems Pvt. Ltd.",
          description:
            "Full-stack blockchain and mobile app development company specializing in token launches, DeFi platforms, DAO architecture, NFT marketplaces, Web3 gaming, and enterprise applications",
          url: window.location.origin,
          logo: `${window.location.origin}/logo.png`,
          foundingDate: "2020",
          slogan:
            "Growing Together · Customer · Company · Co-worker · Community",
          knowsAbout: [
            "Blockchain Development",
            "Token Launches",
            "DeFi Platforms",
            "DAO Architecture",
            "NFT Marketplaces",
            "Web3 Gaming",
            "Mobile App Development",
            "Enterprise Applications",
          ],
          areaServed: "Worldwide",
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Token & Coin Launches",
                description:
                  "Smart contract development, tokenomics, audits, liquidity setup and CEX/DEX listing guidance across EVM & non-EVM chains",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DeFi Platform Development",
                description:
                  "AMMs, staking, lending, yield strategies, oracle integration and security-first architecture for production-grade DeFi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DAO Architecture & Governance",
                description:
                  "Token governance, multi-sig, voting modules, on-chain proposals and treasury management for decentralized organizations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "NFT Marketplaces & Ecosystems",
                description:
                  "Minting, royalties, storefronts, IP protection and cross-chain bridges for creator & enterprise marketplaces",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web3 Gaming & Mobile Integration",
                description:
                  "Play-to-earn mechanics, wallet SDKs, in-game assets as NFTs, on-chain item ownership and mobile game integration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Mobile & Web Apps",
                description:
                  "Scalable backend, API design, responsive UI/UX, Web3 wallet integration and post-launch support",
              },
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which blockchain networks do you support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We support Ethereum, Binance Smart Chain, Polygon, Solana, Avalanche, Arbitrum, Optimism, and custom EVM-compatible chains. We can also develop on emerging networks based on your specific requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide smart contract audits?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we conduct comprehensive internal security audits for all smart contracts. We also coordinate with leading third-party audit firms for additional verification on high-value projects to ensure maximum security.",
              },
            },
            {
              "@type": "Question",
              name: "What is the typical timeline for a project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "An MVP token launch takes 2–6 weeks including smart contract development, testing, and deployment. Full DeFi platforms with complex features require 8–20+ weeks depending on scope, integrations, and audit requirements.",
              },
            },
            {
              "@type": "Question",
              name: "What is your pricing model?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer fixed-price project quotes with milestone-based payments, or flexible monthly retainer models for ongoing development. Pricing depends on project complexity, timeline, blockchain network, and support needs. Contact us for a customized proposal.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer post-launch support and maintenance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We provide comprehensive post-launch support including 24/7 monitoring, performance optimization, security patching, feature upgrades, and emergency response. Support packages can be customized to your specific requirements and SLA needs.",
              },
            },
            {
              "@type": "Question",
              name: "What about NDAs and intellectual property rights?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we sign NDAs before any project discussion. Clients retain full intellectual property rights to all deliverables including smart contracts, source code, documentation, and designs. Your IP is protected throughout the engagement.",
              },
            },
          ],
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <Hero isDark={isDark} theme={theme} />
      <Services isDark={isDark} theme={theme} />
      <About isDark={isDark} theme={theme} />
      <WhyUs isDark={isDark} theme={theme} />
      <Process isDark={isDark} theme={theme} />
      <Testimonials isDark={isDark} theme={theme} />
      <FAQ isDark={isDark} theme={theme} />
      <Contact isDark={isDark} theme={theme} />
      <Footer isDark={isDark} theme={theme} />
    </div>
  );
}
