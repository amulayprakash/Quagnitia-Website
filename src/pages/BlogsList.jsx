import React from "react";
import { useNavigate } from "react-router-dom";
import { useLayoutContext } from "./Layout";
import { blogs } from "../data/blogs";
import ImageWithSkeleton from "../components/ui/ImageWithSkeleton";

export default function BlogsList() {
  const { theme } = useLayoutContext();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      <div className="text-center mb-12">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: theme.text }}
        >
          Our Blog
        </h1>
        <p 
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.muted }}
        >
          Latest updates, news, and insights from the Quagnitia team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
            style={{ 
              backgroundColor: theme.bg === '#08101E' ? '#1A2635' : '#FFFFFF',
              border: `1px solid ${theme.border}`
            }}
          >
            <div className="h-48 overflow-hidden">
              <ImageWithSkeleton 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span 
                  className="text-sm font-medium"
                  style={{ color: theme.accent }}
                >
                  {blog.date}
                </span>
              </div>
              
              <h2 
                className="text-xl font-bold mb-3 line-clamp-2"
                style={{ color: theme.text }}
              >
                {blog.title}
              </h2>
              
              <p 
                className="mb-4 line-clamp-3 text-sm"
                style={{ color: theme.muted }}
              >
                {blog.description}
              </p>
              
              <button
                onClick={() => navigate(`/blog/${blog.slug}`)}
                className="inline-flex items-center font-semibold transition-colors"
                style={{ color: theme.accent }}
              >
                Read Article
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p style={{ color: theme.muted }}>No blogs found.</p>
        </div>
      )}
    </div>
  );
}
