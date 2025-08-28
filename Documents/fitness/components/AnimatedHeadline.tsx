"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

export default function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    // Set initial state - characters above their final position
    gsap.set(chars, { y: -100, opacity: 0 });

    // Create stagger animation
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      delay: 0.2
    });
  }, [text]);

  // Split text into words, then characters
  const words = text.split(' ');
  
  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block overflow-hidden mr-4">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="char inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
