"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import LogoCarousel from "@/components/LogoCarousel";
import { 
  CheckCircle, 
  Play,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export default function LogoMaker() {
  const [brandName, setBrandName] = useState("");

  const carouselImages = [
    {
      src: "/images/logo-maker/bloos.png",
      alt: "Bloos Logo Design",
      title: "Bloos Brand Identity",
      description: "Modern logo design with custom typography and color palette"
    },
    {
      src: "/images/logo-maker/chico.png",
      alt: "Chico Logo Design", 
      title: "Chico Brand Kit",
      description: "Complete brand identity with logo, colors, and typography"
    },
    {
      src: "/images/logo-maker/magnet.png",
      alt: "Magnet Logo Design",
      title: "Magnet Brand Identity", 
      description: "Professional logo with unique visual elements and modern styling"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Logo Maker for <span className="text-primary">Cool Brands</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Create professional logos with custom fonts, colors, and icons. 
            Comes with a complete brand kit. Not just another logo maker.
          </p>
          
          {/* Mojomox-style 3D Search Bar */}
          <div className="relative mb-12 max-w-4xl mx-auto px-4 mt-8">
            <div className="bg-white dark:bg-neutral-900 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-1 border border-gray-100 dark:border-neutral-800 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center bg-white dark:bg-neutral-900 rounded-full overflow-hidden">
                <div className="flex-1 px-6 py-4">
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600"
                    placeholder="Your brand here"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-full shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] transform hover:scale-105 transition-all duration-300 text-base sm:text-lg md:text-xl whitespace-nowrap mr-1"
                >
                  <span className="hidden sm:inline">Show Me Logo Ideas →</span>
                  <span className="sm:hidden">Show Ideas →</span>
                  <Sparkles className="ml-2 h-4 w-4 sm:h-5 w-5 md:h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What is Logo Maker */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">What it is</h3>
              <p className="text-muted-foreground">
                A modern logo maker for startups and small businesses. Type your brand name and see unique logos with custom fonts, colors, and icons.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Who it&apos;s for</h3>
              <p className="text-muted-foreground">
                DIY creators and designers who need fast results. Great for new brands, rebrands, or quick prototypes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Why it&apos;s different</h3>
              <p className="text-muted-foreground">
                Exclusive in-house typefaces and icons. Unlimited edits included so your logo can evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Examples Carousel */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Logo Ideas That Don&apos;t Look Like Ideas
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            See real examples of professional logos created with our logo maker
          </p>
          <LogoCarousel images={carouselImages} />
        </div>
      </section>


      {/* Screen Recording Demo */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See it in action
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how easy it is to create a professional logo in minutes
            </p>
          </div>
          
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="h-8 w-8 text-neutral-700 dark:text-neutral-200" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Logo Maker Demo</h3>
                <p className="text-gray-400">Click to watch the full demo</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            One price, everything included. No subscriptions, no hidden fees.
          </p>
          
          <Card className="max-w-md mx-auto bg-white dark:bg-neutral-900">
            <CardContent className="p-8">
              <div className="text-4xl font-bold mb-4">$49</div>
              <CardTitle className="text-xl mb-4">Complete Logo Package</CardTitle>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Unlimited logo variations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>High-res PNG, SVG, PDF files</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Complete brand kit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Unlimited edits forever</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Commercial usage rights</span>
                </li>
              </ul>
              <Button size="lg" className="w-full text-lg">
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Big Text Bubble with Orange Button */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Design Your Brand Like You Mean It
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Create professional logos with custom fonts, colors, and icons. 
              Get a complete brand kit that makes your business look amazing.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-[0_8px_25px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_35px_rgba(249,115,22,0.5)] transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Creating Your Logo
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Free to try • No credit card required • 17,000+ creators trust us
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
