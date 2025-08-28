"use client";

import { useEffect, useRef } from "react";

export default function UnicornStudioBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if UnicornStudio is already loaded
    if (window.UnicornStudio) {
      return;
    }

    // Initialize UnicornStudio
    window.UnicornStudio = { isInitialized: false };
    
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    script.onload = function() {
      if (!window.UnicornStudio.isInitialized) {
        UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      data-us-project="3PeUbaqYXCyeY5Ga8PjF" 
      style={{width: '100%', height: '100%'}}
    />
  );
}

// Add type declaration for window
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}
