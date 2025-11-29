import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogCarousel({ isDark, theme }) {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approx card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 relative overflow-hidden border-b" style={{ borderColor: theme.border }}>
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
            >
              Latest Insights
            </h2>
            <p style={{ color: theme.muted }}>
              Trends, guides, and deep dives into Web3 & AI
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full w-10 h-10 border hover:bg-accent/10"
                style={{ 
                  borderColor: theme.border,
                  color: theme.text
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full w-10 h-10 border hover:bg-accent/10"
                style={{ 
                  borderColor: theme.border,
                  color: theme.text
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <button
              onClick={() => navigate('/blog')}
              className="hidden md:flex items-center gap-2 font-medium hover:gap-3 transition-all"
              style={{ color: theme.accent }}
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10 pointer-events-none"
          style={{ 
            background: `linear-gradient(to right, ${theme.bg}, transparent)` 
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10 pointer-events-none"
          style={{ 
            background: `linear-gradient(to left, ${theme.bg}, transparent)` 
          }}
        />

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-8 hide-scrollbar snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="w-[300px] md:w-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group transition-transform hover:-translate-y-1 snap-center"
              style={{ 
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.accent }}>
                  {blog.date}
                </div>
                <h3 
                  className="font-bold text-lg line-clamp-2 leading-tight group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: theme.text, '--accent': theme.accent }}
                >
                  {blog.title}
                </h3>
                <p className="text-sm line-clamp-2" style={{ color: theme.muted }}>
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
