import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLayoutContext } from "./Layout";

export default function BlogPage() {
  const { slug } = useParams();
  const { theme } = useLayoutContext();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Dynamically import all HTML files from the blogPages directory
        const modules = import.meta.glob('../components/blogPages/*.html', { 
          query: '?raw',
          import: 'default'
        });

        // Construct the path to the requested blog file
        const path = `../components/blogPages/${slug}.html`;

        if (!modules[path]) {
          throw new Error("Blog not found");
        }

        // Load the content
        const htmlContent = await modules[path]();
        setContent(htmlContent);
      } catch (err) {
        console.error("Failed to load blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  // Handle image skeleton loading
  useEffect(() => {
    if (!content || !articleRef.current) return;

    const images = articleRef.current.getElementsByTagName('img');
    
    Array.from(images).forEach(img => {
      // Skip if already processed
      if (img.parentElement.classList.contains('img-skeleton-wrapper')) return;

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'img-skeleton-wrapper relative overflow-hidden bg-muted/20 rounded-lg';
      wrapper.style.minHeight = '200px'; // Default min-height
      
      // Create skeleton
      const skeleton = document.createElement('div');
      skeleton.className = 'absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 flex items-center justify-center';
      skeleton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      `;
      
      // Insert wrapper before image
      img.parentNode.insertBefore(wrapper, img);
      
      // Move image into wrapper
      wrapper.appendChild(skeleton);
      wrapper.appendChild(img);
      
      // Style image
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease-in-out';
      img.style.position = 'relative';
      img.style.zIndex = '10';
      
      const handleLoad = () => {
        img.style.opacity = '1';
        skeleton.style.display = 'none';
        wrapper.style.minHeight = 'auto';
      };

      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
      }
    });
  }, [content]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse text-lg" style={{ color: theme.muted }}>
          Loading article...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>
          Article Not Found
        </h1>
        <p className="mb-8" style={{ color: theme.muted }}>
          The article you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg font-medium transition-colors"
          style={{ 
            backgroundColor: theme.accent, 
            color: "#FFFFFF" 
          }}
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article 
        ref={articleRef}
        className="prose prose-lg max-w-none"
        style={{ 
          color: theme.text,
          '--tw-prose-body': theme.text,
          '--tw-prose-headings': theme.text,
          '--tw-prose-links': theme.accent,
          '--tw-prose-bold': theme.text,
          '--tw-prose-counters': theme.muted,
          '--tw-prose-bullets': theme.muted,
          '--tw-prose-hr': theme.border,
          '--tw-prose-quotes': theme.text,
          '--tw-prose-quote-borders': theme.accent,
          '--tw-prose-captions': theme.muted,
          '--tw-prose-code': theme.text,
          '--tw-prose-pre-code': theme.text,
          '--tw-prose-pre-bg': theme.bg === '#08101E' ? '#1A2635' : '#F1F5F9',
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
