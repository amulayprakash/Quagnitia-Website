// ServicesResponsive.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
/* -------------------------
   DATA: edit services / projects / images here
   -------------------------*/
const services = [
  {
    id: "token",
    icon: Coins,
    title: "Token & Coin Launches",
    description:
      "Smart contract development, tokenomics, audits, liquidity setup and exchange listing guidance.",
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
          linkedin: "https://www.linkedin.com/in/fusdt-off-a8284838a/",
        },

        website: "https://www.fusdt.online/",
        contact: {
          email: "iam@fusdt.online",
        },
      },
      {
        id: "maxma-01",
        title: "MAXMA Token Launch",
        short: "Token launch and documentation support.",

        description:
          "Maxma Tokens, a finite-supply (1 billion) Ethereum-based cryptocurrency intended to replace the existing in-game currency of the Maxma Gaming platform. The token's utility includes in-game payments, merchandise purchases, staking, and platform governance. The whitepaper details a deflationary model, including transaction burns and profit-based buybacks, with the stated goal of connecting gaming rewards to tradable, real-world asset value",

        date: "2024-01-01",
        tech: ["Solidity", "Token Documentation"],

        images: [token1],

        contract: {
          etherscan: null,
          uniswap: null,
        },

        docs: {
          tokenomics: null,
          whitepaper:
            "https://drive.google.com/file/d/16Tlc5uXzK69lNQrsIBWCyje-F7xrkj4C/view?usp=drive_link",
        },
      },
    ],
  },
  // {
  //   id: "defi",
  //   icon: Shield,
  //   title: "DeFi Platform Development",
  //   description:
  //     "AMMs, staking, lending, yield strategies, oracle integration and security-first architecture.",
  //   projects: [
  //     {
  //       id: "defi-01",
  //       title: "FlowAMM",
  //       short: "Custom AMM with concentrated liquidity",
  //       caseStudy: "/case-studies/flowamm",
  //       date: "2023-11-20",
  //       tech: ["Solidity", "Subgraph"],
  //       images: ["/images/cases/flowamm-1.jpg"],
  //     },
  //   ],
  // },
  {
    id: "dao",
    icon: Gavel,
    title: "DAO Architecture & Governance",
    description:
      "Token governance, multi-sig, voting modules and treasury management for decentralized orgs.",
    projects: [
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
    ],
  },
  {
    id: "nft",
    icon: Palette,
    title: "NFT Marketplaces & Ecosystems",
    description:
      "Minting, royalties, storefronts, metadata pipelines and cross-chain features.",
    projects: [
      {
        id: "nft-crypto3d-01",
        title: "Crypto 3D Punks",
        short:
          "A 10,000-piece 3D reinterpretation of the iconic Cryptopunks, now airdropped on BASE Chain.",

        description:
          "Crypto 3D Punks reimagines the classic Cryptopunks in detailed 3D with ultra-high-resolution artwork. Originally created in 2022, the collection has evolved through strong community support and major technical upgrades, culminating in the full 10,000-NFT airdrop on the BASE Chain.",

        date: "2022-01-01",

        tech: [
          "3D NFT Art",
          "ERC-721",
          "BASE Chain",
          "High-Resolution Asset Pipeline",
        ],

        images: [punks1],

        socials: {
          twitter: "https://x.com/crypt3d_punks",
        },

        website: "https://opensea.io/collection/crypt3dpunksbase",
      },
      {
        id: "nft-moose-01",
        title: "The Moose Society",
        short:
          "A hand-drawn 5000-NFT collection supporting Children's Hospital through partnered charity initiatives.",

        description:
          "The Moose Society is a limited-edition, hand-drawn NFT collection of 5000 moose, each with unique traits and artwork variations. The project actively supports charitable causes, including its partnership with Children's Hospital. The ecosystem expands across multiple collections, offering holders extended benefits and evolving content.",

        date: "2022-01-01",

        tech: [
          "ERC-721",
          "Hand-Drawn NFT Art",
          "Charity-Integrated NFT Utility",
        ],

        images: [
          moose2,
          moose3,
          moose4,
          moose5,
          moose6,
          moose7,
          moose8,
          moose9,
        ],

        contract: {
          etherscan:
            "https://etherscan.io/address/0x8f71e17b612f3ea9a8bf7eeb9289654edca6d8b7",
        },

        socials: {
          twitter: "https://x.com/moosesocietynft",
        },

        website: "https://opensea.io/collection/themoosesociety",

        marketplaces: {
          main: "https://opensea.io/collection/themoosesociety",
          hideouts: "https://opensea.io/collection/society-hideouts",
          upgrades: "https://opensea.io/collection/evoupgrades",
        },
      },
    ],
  },
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Web3 Gaming & Mobile Integration",
    description:
      "Play-to-earn mechanics, wallet SDKs, in-game NFT assets and item economies.",
    projects: [
      {
        id: "web3-gaming-01",
        title: "Web3 Gaming Development",
        short:
          "End-to-end Web3 game development with on-chain mechanics and NFT-powered gameplay.",
        description:
          "We build full Web3 gaming ecosystems including smart contracts, NFT-based items, on-chain progression systems, P2E mechanics, in-game marketplaces, and cross-chain interoperability. Delivery targets Unity, Unreal and browser engines for production-grade experiences.",
        date: "2024-01-01",
        tech: [
          "Unity",
          "Unreal Engine",
          "WebGL / Phaser",
          "ERC-721 / ERC-1155",
          "On-Chain Game Logic",
          "Solidity",
          "Node.js Game Backend",
          "Cross-Chain Bridges",
        ],
        images: [game1, game2],
        capabilities: {
          gameplay: [
            "On-chain abilities, levels, item stats",
            "NFT characters & upgradeable assets",
            "Play-to-earn reward systems",
            "PvP / PvE game logic",
            "Dynamic asset metadata updates",
          ],
          infrastructure: [
            "Custom game smart contracts",
            "Economy balancing & analytics",
            "Item crafting systems",
            "Token-driven reward loops",
            "In-game marketplace integration",
          ],
        },
      },
      {
        id: "mobile-integration-01",
        title: "Web3 Mobile Integration",
        short:
          "Native iOS/Android and React Native Web3 integration with full wallet and dApp support.",
        description:
          "We implement complete Web3 capabilities into mobile apps: wallet connections, smart contract interactions, asset management, real-time updates and secure key handling. Support for React Native, native iOS/Android and Unity mobile pipelines.",
        date: "2024-01-01",
        tech: [
          "React Native",
          "Swift",
          "Kotlin",
          "Unity Mobile",
          "WalletConnect",
          "MetaMask SDK",
          "Coinbase Wallet SDK",
          "Custom Mobile dApp Browser",
        ],
        images: [web3m],
        capabilities: {
          wallets: [
            "MetaMask SDK integration",
            "WalletConnect v2",
            "Coinbase Wallet",
            "Custom mobile key management",
          ],
          features: [
            "Smart contract execution",
            "On-chain asset display",
            "Push alerts for blockchain events",
            "Mobile signing flows (EIP-155, EIP-712)",
            "Secure transaction broadcasting",
          ],
          platforms: ["iOS", "Android", "React Native", "Unity Mobile"],
        },
      },
    ],
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "Enterprise Mobile & Web Apps",
    description:
      "Scalable backends, API design, responsive UI/UX, wallet integrations and post-launch support.",
    projects: [
      {
        id: "app-01",
        title: "LedgerPro App",
        short: "Enterprise wallet + analytics dashboard",
        caseStudy: "/case-studies/ledgerpro",
        date: "2023-10-05",
        tech: ["React Native", "Node.js"],
        images: [
          "/images/cases/ledgerpro-1.jpg",
          "/images/cases/ledgerpro-2.jpg",
        ],
      },
    ],
  },
];

/* ---------- small presentational ProjectCard ---------- */
function ProjectCard({ p, onOpenCarousel, theme }) {
  const thumb = (p.images && p.images[0]) || "";
  return (
    <article
      className="flex gap-3 p-3 rounded-lg"
      style={{
        border: `1px solid ${theme.border}`,
        background: theme.card,
        alignItems: "center",
      }}
    >
      <img
        src={thumb}
        alt={p.title}
        className="w-20 h-12 sm:w-24 sm:h-16 object-cover rounded"
        style={{ flexShrink: 0 }}
      />
      <div style={{ flex: 1 }}>
        <h4 className="font-semibold text-sm" style={{ color: theme.text }}>
          {p.title}
        </h4>
        <p className="text-xs leading-tight" style={{ color: theme.muted }}>
          {p.short}
        </p>
        <div
          className="mt-2 flex items-center gap-2 text-xs"
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

/* ---------- Carousel with touch support ---------- */
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
  const SWIPE_THRESHOLD = 50; // px

  useEffect(() => setIndex(startIndex || 0), [startIndex, images]);

  useEffect(() => onIndexChange(index), [index, onIndexChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // touch handlers for mobile swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    touchDeltaX.current = 0;
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
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded p-2 z-10 touch-target"
        >
          <ChevronLeft className="w-6 h-6" style={{ color: theme.text }} />
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
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-2 z-10 touch-target"
        >
          <ChevronRight className="w-6 h-6" style={{ color: theme.text }} />
        </button>
      </div>

      {/* thumbnail strip - horizontally scrollable on small screens */}
      <div className="flex gap-2 overflow-x-auto py-1 touch-pan-x">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className={`rounded overflow-hidden shrink-0 border-2 ${
              i === index ? "border-white" : "border-transparent"
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
    backgroundColor: `${"#000"}66`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    WebkitOverflowScrolling: "touch",
    zIndex: 100000,
  };

  const panelStyle = {
    width: "100%",
    maxWidth: isMobile ? "100%" : "64rem",
    maxHeight: isMobile ? "100vh" : "80vh",
    overflow: "auto",
    borderRadius: isMobile ? 0 : 12,
    backgroundColor: "#fff",
    border: `1px solid ${theme?.border ?? "#e5e7eb"}`,
    padding: isMobile ? "0" : "1.25rem",
    boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
    position: "relative",
    pointerEvents: "auto",
    zIndex: 100001,
  };

  const closeBtnStyle = {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 3,
    border: "none",
    padding: 8,
    borderRadius: 8,
    cursor: "pointer",
    backgroundColor: "rgb(255, 255, 255)",
    color: theme?.card ?? "#fff",
    boxShadow: "0 6px 18px rgba(2,6,23,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        >
          {/* simple X — you can replace with the lucide CloseIcon if you import it */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke={theme?.card ?? "#fff"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* children area */}
        <div style={{ paddingTop: 8 }}>{children}</div>
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
    gap: 6,
    padding: "6px 12px",
    borderRadius: 8,
    border: `1px solid ${theme.border}`,
    color: theme.text,
    fontSize: 12,
    fontWeight: 600,
    textDecoration: "none",
  };

  const makeLink = (label, href) => (href ? { label, href } : null);

  const renderLinkGroup = (title, links = []) => {
    const filtered = links.filter(Boolean);
    if (!filtered.length) return null;
    return (
      <div className="mt-3 space-y-1">
        <div
          className="text-[11px] uppercase tracking-wide font-semibold"
          style={{ color: theme.muted }}
        >
          {title}
        </div>
        <div className="flex flex-wrap gap-2">
          {filtered.map((link) => (
            <a
              key={title + link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={linkBadgeStyle}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5">
      <header>
        <h3
          className="text-xl sm:text-2xl font-semibold"
          style={{ color: theme.text }}
        >
          {service.title}
        </h3>
        <p className="text-sm" style={{ color: theme.muted }}>
          {service.description}
        </p>
      </header>

      {/* Carousel area (shows when carouselImages is set) */}
      {carouselImages && carouselImages.length > 0 && (
        <ModalCarousel
          images={carouselImages}
          startIndex={carouselStartIndex}
          onIndexChange={onCarouselIndexChange}
          theme={theme}
          isMobile={isMobile}
        />
      )}

      <section className="space-y-4">
        <div className="space-y-2">
          <div
            role="tablist"
            aria-label="Project detail tabs"
            className="flex gap-2 overflow-x-auto pb-1"
          >
            {projects.map((p, idx) => {
              const active = idx === activeProjectIndex;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`project-panel-${p.id}`}
                  className={`px-3 py-2 rounded-xl text-left transition-colors ${
                    active ? "shadow-md" : "opacity-80 hover:opacity-100"
                  }`}
                  style={{
                    border: `1px solid ${active ? theme.accent : theme.border}`,
                    background: active ? theme.card : "transparent",
                    minWidth: 160,
                  }}
                  onClick={() => onProjectTabChange(idx)}
                >
                  <div
                    className="text-[11px] uppercase tracking-wide"
                    style={{ color: active ? theme.accent : theme.muted }}
                  >
                    Project {idx + 1}
                  </div>
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

        {activeProject ? (
          <div
            id={`project-panel-${activeProject.id}`}
            role="tabpanel"
            aria-labelledby={activeProject.id}
            className="space-y-5"
          >
            <div
              className="rounded-2xl p-4 md:p-6"
              style={{
                border: `1px solid ${theme.border}`,
                background: isDarkTheme(theme) ? "rgba(15,23,42,0.6)" : "#fff",
                boxShadow: "0 12px 30px rgba(15,23,42,0.12)",
              }}
            >
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span
                      className="px-3 py-1 rounded-full uppercase tracking-wide"
                      style={{
                        background: theme.card,
                        border: `1px solid ${theme.border}`,
                        color: theme.accent,
                      }}
                    >
                      {service.title}
                    </span>
                    {activeProject.date && (
                      <span
                        className="px-2 py-1 rounded-full"
                        style={{
                          border: `1px solid ${theme.border}`,
                          color: theme.text,
                        }}
                      >
                        {activeProject.date}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4
                      className="text-lg md:text-xl font-semibold"
                      style={{ color: theme.text }}
                    >
                      {activeProject.title}
                    </h4>
                    {activeProject.short && (
                      <p
                        className="text-sm mt-1"
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
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((tech) => (
                        <span key={tech} style={chipStyle}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {activeProject.caseStudy && (
                      <Button
                        variant="ghost"
                        onClick={() =>
                          (window.location.href = activeProject.caseStudy)
                        }
                      >
                        Case Study
                        <ArrowRight
                          className="w-4 h-4 ml-1"
                          strokeWidth={1.5}
                        />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      onClick={() => onOpenCarousel(activeProject.id, 0)}
                    >
                      View Gallery
                      <ChevronRight
                        className="w-4 h-4 ml-1"
                        strokeWidth={1.5}
                      />
                    </Button>
                  </div>
                </div>
                {activeProject.images && activeProject.images.length > 0 && (
                  <div className="w-full lg:w-64">
                    <div
                      className="rounded-xl overflow-hidden"
                      style={{
                        border: `1px solid ${theme.border}`,
                        background: "#000",
                      }}
                    >
                      <img
                        src={activeProject.images[0]}
                        alt={`${activeProject.title}-cover`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="mt-3 flex gap-2 overflow-x-auto">
                      {activeProject.images.slice(0, 5).map((src, idx) => (
                        <button
                          key={src + idx}
                          onClick={() => onOpenCarousel(activeProject.id, idx)}
                          className="rounded-xl overflow-hidden"
                          style={{
                            width: 64,
                            height: 48,
                            border: `1px solid ${theme.border}`,
                          }}
                        >
                          <img
                            src={src}
                            alt={`${activeProject.title}-thumb-${idx}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {activeProject ? (
              <div className="space-y-5">
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
            ) : null}
          </div>
        ) : (
          <p className="text-sm" style={{ color: theme.muted }}>
            No projects available for this service yet.
          </p>
        )}
      </section>
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
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef([]);
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

  // keyboard navigation for tabs
  const onTabsKeyDown = (e) => {
    const count = services.length;
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key))
      e.preventDefault();
    if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % count);
    if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + count) % count);
    if (e.key === "Home") setActiveIndex(0);
    if (e.key === "End") setActiveIndex(count - 1);
  };

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
    const svc = modalService || services[activeIndex];
    if (!svc) return;
    const project = svc.projects?.find((p) => p.id === projectId);
    if (!project || !project.images || project.images.length === 0) return;
    const projectIndex = svc.projects?.findIndex((p) => p.id === projectId);
    if (projectIndex >= 0) setModalProjectIndex(projectIndex);
    syncProjectCarousel(svc, projectIndex >= 0 ? projectIndex : 0, imageIndex);
    // ensure modal is open
    if (!isModalOpen) {
      setModalService(svc);
      setIsModalOpen(true);
    }
  };

  const onCarouselIndexChange = (idx) => setCarouselCurrentIndex(idx);

  const handleProjectTabChange = (idx) => {
    const svc = modalService || services[activeIndex];
    setModalProjectIndex(idx);
    syncProjectCarousel(svc, idx, 0);
  };

  // focus the active tab button for roving focus
  useEffect(() => {
    const btn = tabsRef.current[activeIndex];
    if (btn) btn.focus();
  }, [activeIndex]);

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

        {/* Tabs: horizontal scroll on mobile; full labels on md+ */}
        <div>
          <div
            role="tablist"
            aria-label="Services"
            onKeyDown={onTabsKeyDown}
            className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 mb-6"
          >
            {services.map((s, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${s.id}`}
                  id={`tab-${s.id}`}
                  ref={(el) => (tabsRef.current[i] = el)}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 px-3 py-2 mx-1 rounded-md focus:outline-none ${
                    active ? "ring-2 ring-offset-2" : "hover:opacity-95"
                  }`}
                  style={{
                    border: `1px solid ${active ? theme.accent : theme.border}`,
                    background: active ? theme.card : "transparent",
                    color: active ? theme.text : theme.muted,
                    minWidth: isMobile ? 120 : "auto",
                    fontWeight: 600,
                  }}
                >
                  <s.icon
                    className="w-4 h-4"
                    strokeWidth={1.5}
                    style={{ color: active ? theme.accent : theme.muted }}
                  />
                  <span className="text-sm hidden sm:inline">{s.title}</span>
                  <span className="text-sm sm:hidden">
                    {s.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panels */}
          {services.map((s, i) => (
            <div
              key={s.id}
              role="tabpanel"
              id={`panel-${s.id}`}
              aria-labelledby={`tab-${s.id}`}
              hidden={i !== activeIndex}
              className={`${i === activeIndex ? "block" : "hidden"}`}
            >
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2 space-y-4">
                  <h3
                    className="text-lg md:text-2xl font-semibold"
                    style={{ color: theme.text }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: theme.muted }}>{s.description}</p>

                  <div className="mt-4 grid gap-3">
                    {s.projects?.map((p) => (
                      <div key={p.id}>
                        <ProjectCard
                          p={p}
                          onOpenCarousel={(pid, idx) =>
                            onOpenCarousel(pid, idx)
                          }
                          theme={theme}
                        />
                        {p.images && p.images.length > 0 && (
                          <div className="mt-2 flex gap-2 overflow-x-auto">
                            {p.images.slice(0, 5).map((src, idx) => (
                              <button
                                key={src + idx}
                                onClick={() => onOpenCarousel(p.id, idx)}
                                className="rounded overflow-hidden shrink-0"
                                style={{
                                  width: 76,
                                  height: 48,
                                  border: `1px solid ${theme.border}`,
                                  padding: 0,
                                  background: theme.card,
                                }}
                              >
                                <img
                                  src={src}
                                  alt={`${p.title}-thumb-${idx}`}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="md:col-span-1">
                  <Card
                    className="p-3"
                    style={{
                      background: theme.card,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 12,
                    }}
                  >
                    <CardHeader className="space-y-2">
                      <CardTitle style={{ color: theme.text }}>
                        {s.title}
                      </CardTitle>
                      <CardDescription style={{ color: theme.muted }}>
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="px-2 pb-2">
                      <Button
                        onClick={() => openModalFor(s)}
                        className="w-full"
                        style={{
                          background: "transparent",
                          borderRadius: 8,
                          color: theme.accent,
                        }}
                      >
                        Learn More
                        <ArrowRight
                          className="w-4 h-4 ml-2"
                          strokeWidth={1.5}
                        />
                      </Button>
                    </div>
                  </Card>
                </aside>
              </div>
            </div>
          ))}
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
          modalService || services[activeIndex],
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
