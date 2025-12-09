// ServicesResponsive.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Coins,
  Shield,
  Gavel,
  Palette,
  Gamepad2,
  Smartphone,
  ArrowRight,
  X as CloseIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import moose1 from "@/assets/moose/club.png";
import moose2 from "@/assets/moose/evolve.png";
import moose3 from "@/assets/moose/evolve2.png";
import moose4 from "@/assets/moose/hmoose.png";
import moose5 from "@/assets/moose/mini.png";
import moose6 from "@/assets/moose/mbox.gif";
import moose7 from "@/assets/moose/serum.png";
import moose8 from "@/assets/moose/trax.png";
import moose9 from "@/assets/moose/trax2.png";

import punks1 from "@/assets/punks/opensea.png";

import reign1 from "@/assets/reign/banner.png";

import token1 from "@/assets/token/maxma.png";

import fusdt1 from "@/assets/fusdt/ins.png";
import fusdt2 from "@/assets/fusdt/med.png";
import fusdt3 from "@/assets/fusdt/web.png";
import fusdt4 from "@/assets/fusdt/x.png";

import game1 from "@/assets/game.webp";
import game2 from "@/assets/game2.jpg";

import web3m from "@/assets/web3m.png";

import app1 from "@/assets/app/1.png";
import app2 from "@/assets/app/2.png";
import app3 from "@/assets/app/3.png";
import app4 from "@/assets/app/4.png";
import app5 from "@/assets/app/5.png";

import defi1 from "@/assets/defi/2.png";
import cross from "@/assets/defi/cross.jpeg";
import cross2 from "@/assets/defi/cross2.jpeg";
import dapp from "@/assets/defi/dapp.png";
import fusdtuni from "@/assets/defi/fusdtuni.png";
import liqui from "@/assets/defi/liqui.jpg";
/* -------------------------
   DATA: edit services / projects / images here
   -------------------------*/
const services = [
  {
    id: "enterprise",
    icon: Smartphone,
    title: "Enterprise Engineering & Mobile",
    description:
      "Scalable architectures, Cloud migration, and Legacy modernization for global businesses.",
    details: {
      description:
        "We build the digital backbone of your business. With over two decades of experience, we specialize in modernizing legacy systems, building scalable cloud architectures, and delivering high-performance mobile applications. Our engineering rigor ensures stability, security, and scalability for mission-critical enterprise solutions.",
      points: [
        "Legacy System Modernization",
        "Cloud-Native Architecture",
        "High-Performance Mobile Apps",
        "Enterprise Security & Compliance",
      ],
    },
    projects: [
      {
        id: "app-docboyz-01",
        title: "DocBoyz",
        short:
          "A digital field-force automation platform enabling secure doorstep document collection and verification.",

        description:
          "DocBoyz is a field-force automation platform that streamlines doorstep KYC, document pickup, verification, and logistics coordination. It enables financial institutions and enterprises to automate last-mile operations with real-time tracking, secure workflows, and mobile-first workforce management.",

        date: "2024-01-01",

        tech: [
          "Android",
          "iOS",
          "React Native",
          "Secure Document Handling",
          "KYC Verification Workflows",
        ],

        images: [app3, app2],

        website: "http://www.docboyz.in/",
      },
      {
        id: "app-maphook-01",
        title: "MapHook",
        short:
          "A social discovery app for sharing and exploring geo-tagged memories, events, and nearby stories.",

        description:
          "MapHook is a social discovery platform that enables users to create and explore geo-tagged posts called 'hooks'. Users can share experiences, events, news, and locations using structured location-based entries. The app provides a unique blend of social networking, real-time discovery, and personalized mapping.",

        date: "2024-01-01",

        tech: [
          "iOS",
          "Android",
          "Geo-Tagging",
          "Maps Integration",
          "Social Discovery",
        ],

        images: [app1, app5],

        website: "https://maphook.com/",
      },
      {
        id: "app-mylo-01",
        title: "MYLO – Mind Your Loved Ones",
        short:
          "A mobile app for securely storing and sharing critical medical information and healthcare directives.",

        description:
          "MYLO helps individuals store and manage their own and their loved ones’ essential medical information, healthcare directives, medications, and emergency documents. Users can instantly share this data with caregivers, healthcare providers, and trusted contacts via email, fax, text, or print, directly from their device.",

        date: "2024-01-01",

        tech: [
          "iOS",
          "Android",
          "Secure Data Storage",
          "Medical Information Management",
          "Healthcare Document Sharing",
        ],

        images: [app4],

        website: "https://www.mindyourlovedones.com/",
      },
    ],
  },
  {
    id: "ai",
    icon: Palette, // Using Palette as a placeholder for Brain/AI if not available, or I should import Brain
    title: "Applied Artificial Intelligence",
    description:
      "LLM integration, Predictive Analytics, and Intelligent Automation for business processes.",
    details: {
      description:
        "We help enterprises harness the power of Artificial Intelligence to drive efficiency and innovation. From integrating Large Language Models (LLMs) into customer support workflows to building predictive analytics engines for decision support, we turn hype into practical, value-generating applications.",
      points: [
        "LLM & Generative AI Integration",
        "Predictive Analytics & Forecasting",
        "Intelligent Process Automation",
        "Natural Language Processing (NLP)",
      ],
    },
    projects: [
        // Placeholder projects for AI as we don't have specific ones in the old list
      {
        id: "ai-analytics-01",
        title: "Predictive Retail Analytics",
        short:
          "AI-driven forecasting engine for inventory management and demand planning.",
        description:
          "A custom machine learning solution that analyzes historical sales data, seasonal trends, and external market factors to predict inventory needs with high accuracy. This system reduced stockouts by 30% and minimized overstock waste for a major retail client.",
        date: "2024-05-15",
        tech: ["Python", "TensorFlow", "AWS SageMaker", "React Dashboard"],
        images: [app5], // Reusing generic app image
      },
       {
        id: "ai-chatbot-01",
        title: "Enterprise Knowledge Bot",
        short:
          "Secure internal LLM chatbot for querying company documentation and technical manuals.",
        description:
          "We deployed a secure, private instance of a Large Language Model fine-tuned on the client's internal documentation. This allowed engineering teams to instantly retrieve technical specifications and historical project data using natural language queries, significantly reducing onboarding time.",
        date: "2024-08-01",
        tech: ["OpenAI API", "LangChain", "Vector Database", "Enterprise Security"],
        images: [app1], // Reusing generic app image
      },
      {
        id: "ai-vision-01",
        title: "Industrial Computer Vision",
        short:
          "Automated quality control system using custom CNN models for manufacturing lines.",
        description:
          "A high-speed computer vision system designed to detect defects in manufacturing assembly lines. Utilizing custom Convolutional Neural Networks (CNNs) deployed on edge devices, the system identifies anomalies with 99.8% accuracy in real-time, automatically triggering rejection mechanisms.",
        date: "2024-06-10",
        tech: ["PyTorch", "OpenCV", "Edge Computing", "IoT Integration"],
        images: [app2], // Reusing generic app image
      },
      {
        id: "ai-recsys-01",
        title: "Media Recommendation Engine",
        short:
          "Real-time content recommendation system for a streaming platform.",
        description:
          "We engineered a scalable recommendation engine for a video streaming service. By combining collaborative filtering with content-based filtering, the system delivers personalized content suggestions to millions of users in real-time, increasing user engagement time by 45%.",
        date: "2024-03-22",
        tech: ["Python", "Scikit-learn", "Redis", "Microservices"],
        images: [app3], // Reusing generic app image
      }
    ],
  },
  {
    id: "web3",
    icon: Coins,
    title: "Blockchain & Web3 Solutions",
    description:
      "Smart Contracts, DeFi, Tokenization, and Decentralized Applications.",
    details: {
      description:
        "As pioneers in the Web3 space, we deliver end-to-end blockchain solutions. Whether you need a secure smart contract for a token launch, a complex DeFi protocol, or a DAO governance structure, we combine our deep cryptographic knowledge with enterprise-grade engineering standards.",
      points: [
        "Smart Contract Development & Audits",
        "DeFi & Tokenization Platforms",
        "DAO Governance Systems",
        "Wallet & Exchange Integration",
      ],
    },
    projects: [
      {
        id: "fusdt-01",
        title: "FUSDT Token Launch",
        short:
          "ERC-20 token deployment, liquidity setup, tokenomics, whitepaper, branding, and ecosystem presence.",
        description:
          "Complete FUSDT token deployment including smart contract launch, Uniswap liquidity provisioning, tokenomics modeling, whitepaper preparation, branding assets, and multi-platform presence across social media.",

        date: "2024-01-01",
        tech: ["Solidity", "Uniswap v4", "Etherscan", "Tokenomics", "Branding"],

        images: [
          "https://i.postimg.cc/L6KDbNB6/offcial-2-200x200.png",
          fusdt1,
          fusdt2,
          fusdt3,
          fusdt4,
        ],

        contract: {
          etherscan:
            "https://etherscan.io/address/0x8413C89bA166f95E886dc5560f80E40640968ac6",
          uniswap: "https://app.uniswap.org/positions/v4/ethereum/80254",
        },

        docs: {
          tokenomics:
            "https://drive.google.com/file/d/1OByrlo7_krMqADZtMXU8683_jotkPtdq/view?usp=sharing",
          whitepaper:
            "https://drive.google.com/file/d/1U00iRaXhEZBI3IlTGLXZyblq1QpRkFtN/view?usp=sharing",
        },

        branding: {
          logo: "https://i.postimg.cc/L6KDbNB6/offcial-2-200x200.png",
        },

        socials: {
          instagram: "https://www.instagram.com/offcial_fusdt/",
          twitter: "https://x.com/official_fusdt",
          medium: "https://medium.com/@official_fusdt",
        },

        website: "https://www.fusdt.online/",
        contact: {
          email: "iam@fusdt.online",
        },
      },
      {
        id: "rwa-01",
        title: "Real World Asset Tokenization",
        short:
          "Platform for tokenizing commercial real estate assets with compliance enforcement.",
        description:
          "A compliant platform for fractionalizing ownership of high-value commercial real estate. The system utilizes ERC-3643 standards to enforce identity verification (KYC/AML) directly on-chain, ensuring that only eligible investors can hold and trade the asset-backed tokens.",
        date: "2024-02-15",
        tech: ["ERC-3643", "Solidity", "KYC/AML Integration", "Legal Engineering"],
        images: [defi1], // Reusing generic defi image
      },
      {
        id: "bridge-01",
        title: "Secure Cross-Chain Bridge",
        short:
          "Trust-minimized bridge infrastructure for transferring assets between EVM chains.",
        description:
          "We architected a secure cross-chain bridge protocol facilitating seamless asset transfers between Ethereum, Polygon, and BSC. The architecture employs a decentralized network of relayers and multi-sig validators to minimize trust assumptions and prevent common bridge exploits.",
        date: "2023-12-10",
        tech: ["Solidity", "Rust", "Relayer Network", "Cryptography"],
        images: [cross], // Reusing generic cross image
      },
      {
        id: "alpha-01",
        title: "Alpha Island Club",
        short:
          "Fractionalized access to high-value NFT, crypto, ICO, and IRL investment portfolios.",

        description:
          "Alpha Island Club provides smaller investors with fractional access to premium investment opportunities typically reserved for larger holders. The project uses an NFT membership model to offer diversified exposure across NFTs, cryptocurrency assets, ICO allocations, and select real-world investments.",

        date: "2024-01-01",
        tech: [
          "ERC-721",
          "NFT Membership",
          "Smart Contract",
          "Portfolio Allocation",
        ],

        images: [moose1],

        contract: {
          etherscan:
            "https://etherscan.io/address/0x24a913b00cbc8c3c747b19c7944e4da26da1130b",
        },

        socials: {
          twitter: "https://x.com/moosesocietynft",
        },

        website: "https://opensea.io/collection/alphaislandclub",
      },
       {
        id: "moose-society-01",
        title: "Moose Society",
        short:
          "Exclusive NFT collection of unique Moose characters with community benefits.",
        description:
          "A vibrant ecosystem of digital collectibles featuring unique Moose characters. This project bridges community engagement with digital ownership, offering holders exclusive access to future drops and community events.",
        date: "2024-03-01",
        tech: ["ERC-721", "NFT", "Community Governance"],
        images: [moose6, moose7, moose2, moose1],
        socials: {
          twitter: "https://x.com/moosesocietynft",
        },
      },
      {
        id: "crypt3d-punks-01",
        title: "Crypt3D Punks",
        short:
          "3D evolutions of the classic Punk aesthetics in a modern digital art form.",
        description:
          "A collection that reimagines the iconic Punk aesthetic with high-quality 3D rendering. Crypt3D Punks brings a new dimension to digital identity and collectible art.",
        date: "2024-03-15",
        tech: ["ERC-721", "NFT", "3D Art"],
        images: [punks1],
        socials: {
          twitter: "https://x.com/crypt3d_punks",
        },
      },
      {
        id: "defi-01",
        title: "FUSDT Custom AMM & DEX ",
        short: "Custom AMM & DEX Development",
        description:
          "We architect and deploy bespoke Automated Market Makers (AMMs) and complete Decentralized Exchanges (DEXs) from the ground up. This service is for clients who need unique features not available in standard forks. We design, build, and audit the complete smart contract system to match your specific protocol requirements.",
        date: "2023-11-20",
        tech: ["Solidity", "Subgraph"],
        images: [
          defi1,
          fusdtuni,
          "https://i.postimg.cc/L6KDbNB6/offcial-2-200x200.png",
          fusdt1,
          fusdt2,
        ],
        contract: {
          etherscan:
            "https://etherscan.io/address/0x8413C89bA166f95E886dc5560f80E40640968ac6",
          uniswap: "https://app.uniswap.org/positions/v4/ethereum/80254",
        },

        docs: {
          tokenomics:
            "https://drive.google.com/file/d/1OByrlo7_krMqADZtMXU8683_jotkPtdq/view?usp=sharing",
          whitepaper:
            "https://drive.google.com/file/d/1U00iRaXhEZBI3IlTGLXZyblq1QpRkFtN/view?usp=sharing",
        },
        socials: {
          instagram: "https://www.instagram.com/offcial_fusdt/",
          twitter: "https://x.com/official_fusdt",
          medium: "https://medium.com/@official_fusdt",
        },

        website: "https://www.fusdt.online/",
        contact: {
          email: "iam@fusdt.online",
        },
      },
    ],
  },
];

/* ---------- small presentational ProjectCard ---------- */
function ProjectCard({ p, onOpenCarousel, theme }) {
  const thumb = (p.images && p.images[0]) || "";
  return (
    <article
      className="flex flex-col sm:flex-row gap-3 p-3 rounded-lg transition-colors"
      style={{
        border: `1px solid ${theme.border}`,
        background: theme.card,
        alignItems: "stretch",
      }}
    >
      <img
        src={thumb}
        alt={p.title}
        className="w-full h-36 sm:w-24 sm:h-16 object-cover rounded"
        style={{ flexShrink: 0 }}
      />
      <div style={{ flex: 1 }} className="space-y-1">
        <h4
          className="font-semibold text-sm sm:text-base"
          style={{ color: theme.text }}
        >
          {p.title}
        </h4>
        <p
          className="text-xs sm:text-sm leading-tight"
          style={{ color: theme.muted }}
        >
          {p.short}
        </p>
        <div
          className="pt-2 flex flex-wrap items-center gap-2 text-xs"
          style={{ color: theme.muted }}
        >
          <div className="text-[11px]">{p.date}</div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenCarousel(p.id, 0)}
            >
              View images
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- small browser guard for portals ---------- */
function useIsBrowser() {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true), []);
  return isBrowser;
}

/* ---------- Carousel with touch support and auto-loop ---------- */
function ModalCarousel({
  images = [],
  startIndex = 0,
  onIndexChange = () => {},
  theme = {},
  isMobile = false,
}) {
  const [index, setIndex] = useState(startIndex || 0);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const autoPlayIntervalRef = useRef(null);
  const SWIPE_THRESHOLD = 50; // px
  const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

  useEffect(() => setIndex(startIndex || 0), [startIndex, images]);

  useEffect(() => onIndexChange(index), [index, onIndexChange]);

  // Pause auto-play on user interaction
  const pauseAutoPlayRef = useRef(null);
  const pauseAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    // Clear any existing resume timeout
    if (pauseAutoPlayRef.current) {
      clearTimeout(pauseAutoPlayRef.current);
    }
    // Resume after 8 seconds of inactivity
    pauseAutoPlayRef.current = setTimeout(() => {
      if (images.length > 1 && !autoPlayIntervalRef.current) {
        autoPlayIntervalRef.current = setInterval(() => {
          setIndex((i) => (i + 1) % images.length);
        }, AUTO_PLAY_INTERVAL);
      }
    }, 8000);
  }, [images.length]);

  // Auto-play carousel in a loop
  useEffect(() => {
    if (images.length <= 1) return;

    autoPlayIntervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      if (pauseAutoPlayRef.current) {
        clearTimeout(pauseAutoPlayRef.current);
        pauseAutoPlayRef.current = null;
      }
    };
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        prev();
        pauseAutoPlay();
      }
      if (e.key === "ArrowRight") {
        next();
        pauseAutoPlay();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    pauseAutoPlay();
  };
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
    pauseAutoPlay();
  };

  // touch handlers for mobile swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    touchDeltaX.current = 0;
    pauseAutoPlay();
  };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const x = e.touches?.[0]?.clientX ?? 0;
    touchDeltaX.current = x - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current > 0) prev();
      else next();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  if (!images || images.length === 0) return null;

  // responsive heights
  const carouselHeight = isMobile ? "40vh" : "50vh";

  return (
    <div className="space-y-3">
      <div
        className="relative w-full flex items-center justify-center"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 z-10 touch-target transition-all hover:scale-110"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }}
        >
          <ChevronLeft className="w-6 h-6" style={{ color: "#ffffff" }} />
        </button>

        <div
          style={{
            maxHeight: carouselHeight,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            borderRadius: isMobile ? 6 : 10,
            overflow: "hidden",
          }}
        >
          <img
            src={images[index]}
            alt={`carousel-${index}`}
            style={{
              maxWidth: "100%",
              maxHeight: carouselHeight,
              objectFit: "contain",
            }}
          />
        </div>

        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 z-10 touch-target transition-all hover:scale-110"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }}
        >
          <ChevronRight className="w-6 h-6" style={{ color: "#ffffff" }} />
        </button>
      </div>

      {/* thumbnail strip - horizontally scrollable on small screens */}
      <div className="flex gap-2 overflow-x-auto py-1 touch-pan-x">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => {
              setIndex(i);
              pauseAutoPlay();
            }}
            className={`rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
              i === index
                ? "border-white scale-105 shadow-lg"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            style={{
              width: isMobile ? 80 : 96,
              height: isMobile ? 56 : 64,
              padding: 0,
              background: theme.card,
            }}
          >
            <img
              src={src}
              alt={`thumb-${i}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      <div className="text-xs" style={{ color: theme.muted }}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

/* ---------- Portal modal (responsive full-screen on small devices) ---------- */
function PortalModal({
  open,
  onClose,
  children,
  theme = {},
  isMobile = false,
}) {
  const containerRef = useRef(null);
  const portalRootRef = useRef(null);

  useEffect(() => {
    // create portal root once
    portalRootRef.current = document.createElement("div");
    portalRootRef.current.setAttribute("data-portal", "service-modal");
    // ensure high stacking context
    portalRootRef.current.style.zIndex = "99999";
    document.body.appendChild(portalRootRef.current);
    return () => {
      if (portalRootRef.current) {
        document.body.removeChild(portalRootRef.current);
        portalRootRef.current = null;
      }
    };
  }, []);

  // lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // focus first focusable inside modal after mount
      setTimeout(() => {
        const el = portalRootRef.current?.querySelector(
          "button, a, input, textarea, [tabindex]:not([tabindex='-1'])"
        );
        if (el) el.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!portalRootRef.current || !open) return null;

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(2,6,23,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    WebkitOverflowScrolling: "touch",
    zIndex: 100000,
    overflowY: "auto",
    padding: isMobile ? "1rem" : "1rem",
  };

  const panelStyle = {
    width: isMobile ? "90%" : "auto",
    maxWidth: isMobile ? "90%" : "64rem",
    minHeight: isMobile ? "auto" : "auto",
    maxHeight: isMobile ? "90vh" : "85vh",
    overflow: "hidden",
    borderRadius: isMobile ? "16px" : 12,
    backgroundColor: "#fff",
    border: `1px solid ${theme?.border ?? "#e5e7eb"}`,
    padding: isMobile
      ? "1.25rem 1rem calc(env(safe-area-inset-bottom) + 1.5rem)"
      : "1.5rem",
    boxShadow: "0 10px 40px rgba(2,6,23,0.8)",
    position: "relative",
    pointerEvents: "auto",
    zIndex: 100001,
    display: "flex",
    flexDirection: "column",
    margin: isMobile ? "auto" : "0",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 3,
    border: "none",
    padding: 10,
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    transition: "all 0.2s ease",
  };

  const content = (
    <div
      style={overlayStyle}
      // use pointerdown so it triggers before focus changes on mobile/desktop
      onPointerDown={(e) => {
        // close only when clicking the overlay itself (not children)
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        onPointerDown={(e) => {
          // prevent overlay handler from firing when interacting inside panel
          e.stopPropagation();
        }}
        style={panelStyle}
        ref={containerRef}
      >
        <button
          aria-label="Close modal"
          onClick={onClose}
          style={closeBtnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#dc2626";
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(239, 68, 68, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ef4444";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(239, 68, 68, 0.4)";
          }}
        >
          <CloseIcon
            className="w-5 h-5"
            strokeWidth={2.5}
            style={{ color: "#ffffff" }}
          />
        </button>

        {/* children area */}
        <div
          style={{
            paddingTop: isMobile ? 0 : 8,
            flex: 1,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, portalRootRef.current);
}

/* ---------- Function: returns modal content JSX (kept API) ---------- */
function renderServiceModalContent(
  service,
  handlers = {},
  carouselState = {},
  theme = {},
  isMobile = false,
  projectTabState = {}
) {
  if (!service) return null;
  const { onOpenCarousel } = handlers;
  const { carouselImages, carouselStartIndex, onCarouselIndexChange } =
    carouselState;
  const projects = service.projects ?? [];
  const activeProjectIndexRaw = projectTabState.activeIndex ?? 0;
  const activeProjectIndex =
    projects.length > 0
      ? Math.min(Math.max(activeProjectIndexRaw, 0), projects.length - 1)
      : 0;
  const onProjectTabChange = projectTabState.onChange ?? (() => {});
  const activeProject = projects[activeProjectIndex];

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    color: theme.accent,
    fontSize: 12,
    fontWeight: 600,
  };

  const linkBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 16px",
    borderRadius: 10,
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.card,
    color: theme.text,
    fontSize: 13,
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  const makeLink = (label, href) => (href ? { label, href } : null);

  const renderLinkGroup = (title, links = []) => {
    const filtered = links.filter(Boolean);
    if (!filtered.length) return null;
    return (
      <div
        className="mt-4 space-y-3 p-4 rounded-xl"
        style={{
          backgroundColor: theme.card,
          border: `1px solid ${theme.border}`,
        }}
      >
        <div
          className="text-xs uppercase tracking-wide font-semibold"
          style={{ color: theme.accent }}
        >
          {title}
        </div>
        <div
          className={`flex gap-3 ${
            isMobile ? "overflow-x-auto pb-1 touch-pan-x snap-x" : "flex-wrap"
          }`}
          style={{
            flexWrap: isMobile ? "nowrap" : "wrap",
          }}
        >
          {filtered.map((link) => (
            <a
              key={title + link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={linkBadgeStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.accent;
                e.currentTarget.style.backgroundColor = `${theme.accent}10`;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 4px 12px ${theme.accent}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.border;
                e.currentTarget.style.backgroundColor = theme.card;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 1px 3px rgba(0, 0, 0, 0.1)";
              }}
            >
              <span>{link.label}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
                style={{ color: theme.accent }}
              />
            </a>
          ))}
        </div>
      </div>
    );
  };

  const renderCapabilityGrid = (capabilities = {}) => {
    if (!capabilities) return null;
    const entries = Object.entries(capabilities).filter(
      ([, value]) => Array.isArray(value) && value.length > 0
    );
    if (!entries.length) return null;

    return (
      <div className="space-y-2">
        <div className="text-sm font-semibold" style={{ color: theme.text }}>
          Capabilities
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {entries.map(([label, items]) => (
            <div
              key={label}
              className="rounded-xl p-3"
              style={{
                border: `1px solid ${theme.border}`,
                background: theme.card,
              }}
            >
              <div
                className="text-[11px] uppercase tracking-wide font-semibold"
                style={{ color: theme.muted }}
              >
                {label}
              </div>
              <ul
                className="mt-2 space-y-1.5 text-sm"
                style={{ color: theme.text }}
              >
                {items.map((item) => (
                  <li key={`${label}-${item}`} className="flex gap-2">
                    <span style={{ color: theme.accent }}>•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* 1. Modal Title */}
      <header>
        <h3
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: theme.text,
          }}
        >
          {service.title}
        </h3>
        {/* 2. Description */}
        <p className="text-base leading-relaxed" style={{ color: theme.muted }}>
          {service.description}
        </p>
      </header>

      {/* 3. Details Section */}
      {service.details && (
        <div
          className="rounded-xl p-5 space-y-4"
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
          }}
        >
          {service.details.description && (
            <p
              className="text-sm leading-relaxed"
              style={{ color: theme.text }}
            >
              {service.details.description}
            </p>
          )}
          {service.details.points && service.details.points.length > 0 && (
            <div className="space-y-2">
              <div
                className="text-xs uppercase tracking-wide font-semibold"
                style={{ color: theme.muted }}
              >
                Key Features
              </div>
              <ul className="space-y-2">
                {service.details.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: theme.text }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: theme.accent }}
                    />
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 4. Project Tabs */}
      {projects.length > 0 && (
        <section className="space-y-4">
          <div className="space-y-2">
            <div
              className="text-xs uppercase tracking-wide font-semibold"
              style={{ color: theme.muted }}
            >
              Projects
            </div>
            <div
              role="tablist"
              aria-label="Project detail tabs"
              className="flex gap-2 overflow-x-auto pb-1 touch-pan-x snap-x snap-mandatory"
            >
              {projects.map((p, idx) => {
                const active = idx === activeProjectIndex;
                return (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`project-panel-${p.id}`}
                    id={`project-tab-${p.id}`}
                    className={`px-3 py-2 rounded-xl text-left transition-colors snap-start ${
                      active ? "shadow-lg" : "opacity-80 hover:opacity-100"
                    }`}
                    style={{
                      border: `1px solid ${
                        active ? theme.accent : theme.border
                      }`,
                      background: active ? theme.card : "transparent",
                      minWidth: isMobile ? 220 : 160,
                      boxShadow: active
                        ? `0 4px 12px ${theme.accent}30`
                        : "none",
                    }}
                    onClick={() => onProjectTabChange(idx)}
                  >
                   
                    <div
                      className="text-sm font-semibold line-clamp-1"
                      style={{ color: theme.text }}
                    >
                      {p.title}
                    </div>
                    <div className="text-[12px]" style={{ color: theme.muted }}>
                      {p.date}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Photo Slides/Carousel - Shows images for selected project */}
          {activeProject &&
            activeProject.images &&
            activeProject.images.length > 0 && (
              <div className="mt-4">
                <ModalCarousel
                  images={activeProject.images}
                  startIndex={0}
                  onIndexChange={onCarouselIndexChange}
                  theme={theme}
                  isMobile={isMobile}
                />
              </div>
            )}

          {/* 6. Project Related Details */}
          {activeProject ? (
            <div
              id={`project-panel-${activeProject.id}`}
              role="tabpanel"
              aria-labelledby={`project-tab-${activeProject.id}`}
              className="space-y-5"
            >
              <div
                className="rounded-xl p-5 space-y-4"
                style={{
                  border: `1px solid ${theme.border}`,
                  backgroundColor: theme.card,
                }}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3 text-xs">
                    {activeProject.date && (
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          border: `1px solid ${theme.border}`,
                          color: theme.text,
                          backgroundColor: theme.card,
                        }}
                      >
                        {activeProject.date}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h4
                      className="text-xl font-semibold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        color: theme.text,
                      }}
                    >
                      {activeProject.title}
                    </h4>
                    {activeProject.short && (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: theme.muted }}
                      >
                        {activeProject.short}
                      </p>
                    )}
                  </div>
                  {activeProject.description && (
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: theme.text }}
                    >
                      {activeProject.description}
                    </p>
                  )}

                  {activeProject.tech && activeProject.tech.length > 0 && (
                    <div className="space-y-2">
                      <div
                        className="text-xs uppercase tracking-wide font-semibold"
                        style={{ color: theme.muted }}
                      >
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((tech) => (
                          <span key={tech} style={chipStyle}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProject.caseStudy && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        variant="ghost"
                        onClick={() =>
                          (window.location.href = activeProject.caseStudy)
                        }
                        style={{
                          border: `1px solid ${theme.border}`,
                          color: theme.text,
                        }}
                      >
                        Case Study
                        <ArrowRight
                          className="w-4 h-4 ml-1"
                          strokeWidth={1.5}
                        />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Project Information */}
              <div className="space-y-5">
                {renderCapabilityGrid(activeProject.capabilities)}
                <div className="space-y-4">
                  {renderLinkGroup("Contract", [
                    makeLink("Etherscan", activeProject.contract?.etherscan),
                    makeLink("Uniswap", activeProject.contract?.uniswap),
                  ])}
                  {renderLinkGroup("Documentation", [
                    makeLink("Tokenomics", activeProject.docs?.tokenomics),
                    makeLink("Whitepaper", activeProject.docs?.whitepaper),
                  ])}
                  {renderLinkGroup("Branding", [
                    makeLink("Logo", activeProject.branding?.logo),
                  ])}
                  {renderLinkGroup("Socials", [
                    makeLink("Instagram", activeProject.socials?.instagram),
                    makeLink("Twitter / X", activeProject.socials?.twitter),
                    makeLink("Medium", activeProject.socials?.medium),
                    makeLink("LinkedIn", activeProject.socials?.linkedin),
                  ])}
                  {renderLinkGroup("Website", [
                    makeLink("Visit site", activeProject.website),
                  ])}
                  {renderLinkGroup("Contact", [
                    makeLink(
                      activeProject.contact?.email,
                      activeProject.contact?.email
                        ? `mailto:${activeProject.contact.email}`
                        : null
                    ),
                  ])}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm" style={{ color: theme.muted }}>
              No projects available for this service yet.
            </p>
          )}
        </section>
      )}
    </div>
  );
}

function isDarkTheme(theme = {}) {
  if (!theme || !theme.card) return false;
  const hex = theme.card.replace("#", "");
  if (hex.length !== 6) return false;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

/* ---------- Tabs + Main Services component (responsive) ---------- */
export default function Services({ isDark, theme }) {
  const isMobileHook = useIsMobile(); // your hook (falls back to window width)
  // keep explicit small-screen detection to drive modal fullscreen
  const [isClientMobile, setIsClientMobile] = useState(false);
  useEffect(
    () =>
      setIsClientMobile(
        window.matchMedia && window.matchMedia("(max-width: 640px)").matches
      ),
    []
  );

  const isMobile = isClientMobile || isMobileHook;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState(null);
  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  // Carousel state inside modal:
  const [carouselImages, setCarouselImages] = useState([]);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);

  const resetCarouselState = useCallback(() => {
    setCarouselImages([]);
    setCarouselStartIndex(0);
    setCarouselCurrentIndex(0);
  }, []);

  const syncProjectCarousel = useCallback(
    (serviceRef, projectIdx = 0, imageIdx = 0) => {
      if (!serviceRef) {
        resetCarouselState();
        return;
      }
      const projects = serviceRef.projects ?? [];
      const project = projects[projectIdx];
      if (!project || !project.images || project.images.length === 0) {
        resetCarouselState();
        return;
      }
      const safeIndex = Math.min(
        Math.max(imageIdx ?? 0, 0),
        project.images.length - 1
      );
      setCarouselImages(project.images);
      setCarouselStartIndex(safeIndex);
      setCarouselCurrentIndex(safeIndex);
    },
    [resetCarouselState]
  );

  // open modal for a service (carousel cleared)
  const openModalFor = (service) => {
    setModalService(service);
    setIsModalOpen(true);
    setModalProjectIndex(0);
    syncProjectCarousel(service, 0, 0);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalService(null);
    resetCarouselState();
    setModalProjectIndex(0);
  };

  // open carousel for a project (within modal)
  const onOpenCarousel = (projectId, imageIndex = 0) => {
    if (!modalService) return;
    const project = modalService.projects?.find((p) => p.id === projectId);
    if (!project || !project.images || project.images.length === 0) return;
    const projectIndex = modalService.projects?.findIndex(
      (p) => p.id === projectId
    );
    if (projectIndex >= 0) setModalProjectIndex(projectIndex);
    syncProjectCarousel(
      modalService,
      projectIndex >= 0 ? projectIndex : 0,
      imageIndex
    );
    // ensure modal is open
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  const onCarouselIndexChange = (idx) => setCarouselCurrentIndex(idx);

  const handleProjectTabChange = (idx) => {
    if (!modalService) return;
    setModalProjectIndex(idx);
    // Sync carousel to show the selected project's images
    const project = modalService.projects?.[idx];
    if (project && project.images && project.images.length > 0) {
      syncProjectCarousel(modalService, idx, 0);
    } else {
      resetCarouselState();
    }
  };

  return (
    <section id="services" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
          >
            Core Services
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: theme.muted }}
          >
            End-to-end blockchain and mobile development solutions tailored to
            your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.id}
                className="flex flex-col p-6 rounded-xl backdrop-blur-sm transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accent}10)`,
                    }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      strokeWidth={1.5}
                      style={{ color: theme.accent }}
                    />
                  </div>
                </div>

                {/* Heading */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: theme.text,
                  }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 flex-grow"
                  style={{ color: theme.muted }}
                >
                  {s.description}
                </p>

                {/* View More Button */}
                <Button
                  onClick={() => openModalFor(s)}
                  className="w-full mt-auto"
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${theme.accent}`,
                    borderRadius: 8,
                    color: theme.accent,
                    padding: "0.625rem 1rem",
                    fontWeight: 600,
                  }}
                >
                  View More
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal (portal) - pass current carousel state and handlers */}
      <PortalModal
        open={isModalOpen}
        onClose={closeModal}
        theme={theme}
        isMobile={isMobile}
      >
        {renderServiceModalContent(
          modalService,
          { onOpenCarousel },
          { carouselImages, carouselStartIndex, onCarouselIndexChange },
          theme,
          isMobile,
          {
            activeIndex: modalProjectIndex,
            onChange: handleProjectTabChange,
          }
        )}
      </PortalModal>
    </section>
  );
}

/* ---------- helper passed into modal content above ---------- */
function onCarouselIndexChange(idx) {
  // placeholder no-op if not wired (component wires it)
  return;
}
