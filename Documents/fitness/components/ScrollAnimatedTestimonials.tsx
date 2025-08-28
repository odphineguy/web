"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

interface ScrollAnimatedTestimonialsProps {
  testimonials: Testimonial[];
  direction: "left" | "right";
  className?: string;
}

export default function ScrollAnimatedTestimonials({ testimonials, direction, className = "" }: ScrollAnimatedTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.testimonial-card');
    
    // Set initial state - cards below their final position with 0 opacity
    gsap.set(cards, { y: 100, opacity: 0 });

    // Create scroll-triggered stagger animation
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#testimonials-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [testimonials]);

  return (
    <div ref={containerRef} className={`flex animate-marquee-${direction} ${className}`}>
      {[...Array(2)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-6 min-w-max">
          {testimonials.map((testimonial, index) => (
            <Card key={`${direction}-${rowIndex}-${index}`} className="testimonial-card w-80 flex-shrink-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
