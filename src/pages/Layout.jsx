import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import logo from "./../assets/logo_small-up.png";
const LayoutContext = createContext(null);

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/" && location.pathname !== "/Home") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const theme = isDark
    ? {
        bg: "#08101E",
        text: "#EAF3FF",
        muted: "#7D8FA6",
        accent: "#FF7A1A",
        card: "rgba(255,122,26,0.06)",
        border: "rgba(255,122,26,0.25)",
      }
    : {
        bg: "#EFF4FA",
        text: "#1A2635",
        muted: "#56677C",
        accent: "#FF7F33",
        card: "rgba(30, 90, 170, 0.06)",
        border: "rgba(26, 38, 53, 0.18)",
      };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Sticky Header */}
      <header
        className={` top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{
          backgroundColor: isDark
            ? "rgba(13, 23, 34, 0.9)"
            : "rgba(255, 255, 255, 1)",
          borderBottom: isScrolled ? `1px solid ${theme.border}` : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt=" Quagnitia Systems Pvt. Ltd."
              className="h-10 cursor-pointer"
              onClick={() => {
                if (location.pathname !== "/" && location.pathname !== "/Home") {
                  navigate("/");
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                FAQ
              </button>
              <button
                onClick={() => navigate("/blog")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:opacity-70 transition-opacity"
                style={{ color: theme.muted }}
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-4">
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="rounded-lg"
                style={{
                  color: theme.text,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-5 h-5" strokeWidth={1.5} />
                )}
              </Button> */}

              <Button
                onClick={() => scrollToSection("contact")}
                className="hidden md:block"
                style={{
                  backgroundColor: theme.accent,
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "0 24px",
                  height: "40px",
                }}
              >
                Get Started
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden rounded-lg"
                style={{ color: theme.text }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav
              className="md:hidden pt-4 pb-4 flex flex-col items-center gap-4 border-t mt-4"
              style={{ borderColor: theme.border }}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  navigate("/blog");
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2"
                style={{ color: theme.muted }}
              >
                Contact
              </button>
            </nav>
          )}
        </div>
      </header>

      <LayoutContext.Provider value={{ isDark, theme }}>
        <main className="pt-20">{children}</main>
      </LayoutContext.Provider>

      {/* Sticky Bottom CTA (Mobile Only) */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 backdrop-blur-lg shadow-lg"
        style={{
          backgroundColor: isDark
            ? "rgba(13, 23, 34, 0.95)"
            : "rgba(244, 247, 250, 0.95)",
          borderTop: `1px solid ${theme.border}`,
        }}
      >
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-full"
          style={{
            backgroundColor: theme.accent,
            color: "#FFFFFF",
            borderRadius: "8px",
            height: "48px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Get a Free Quote
        </Button>
      </div>

      {/* Mobile padding for sticky CTA */}
      <div className="md:hidden h-20" />
    </div>
  );
}

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("Component must be rendered within a Layout provider");
  }
  return context;
};
