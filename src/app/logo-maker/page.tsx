"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle, 
  Star, 
  Download, 
  Palette, 
  Type, 
  Zap, 
  ArrowRight,
  Play,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export default function LogoMaker() {
  const [brandName, setBrandName] = useState("Your Brand");
  const [selectedStyle, setSelectedStyle] = useState("modern");

  const logoStyles = [
    { id: "modern", name: "Modern", preview: "Your Brand" },
    { id: "minimalist", name: "Minimalist", preview: "YOUR BRAND" },
    { id: "vintage", name: "Vintage", preview: "Your Brand" },
    { id: "handwritten", name: "Handwritten", preview: "Your Brand" },
    { id: "bold", name: "Bold", preview: "YOUR BRAND" },
    { id: "elegant", name: "Elegant", preview: "Your Brand" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "Created an amazing logo in just 5 minutes! The brand kit feature is incredible."
    },
    {
      name: "Mike Chen",
      company: "Creative Agency",
      rating: 5,
      text: "This tool saved me hours of work. The font combinations are perfect."
    },
    {
      name: "Lisa Rodriguez",
      company: "Boutique Store",
      rating: 5,
      text: "Professional results without the professional price. Love it!"
    }
  ];

  const features = [
    {
      icon: <Type className="h-6 w-6" />,
      title: "Unique Fonts",
      description: "Choose from thousands of custom fonts you won't find anywhere else"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Smart Colors",
      description: "AI-powered color palettes that work perfectly together"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Results",
      description: "See your logo come to life in real-time as you design"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "High-Res Downloads",
      description: "Get PNG, SVG, and PDF files in any size you need"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Logo Maker for <span className="text-primary">Cool Brands</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create professional logos with custom fonts, colors, and icons. 
            Comes with a complete brand kit. Not just another logo maker.
          </p>
          
          {/* Logo Preview Demo */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-white dark:bg-black rounded-full border"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">Logo Maker Live Preview</span>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: selectedStyle === 'bold' ? 'Arial Black' : 'Inter' }}>
                  {brandName}
                </div>
                <div className="text-sm text-muted-foreground">Professional logo design in seconds</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Brand Name</label>
                <Input 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="text-center text-lg"
                  placeholder="Enter your brand name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Logo Style</label>
                <div className="grid grid-cols-3 gap-2">
                  {logoStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-lg border text-sm transition-colors ${
                        selectedStyle === style.id 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 mb-4">
            <Sparkles className="mr-2 h-5 w-5" />
            Start Creating Your Logo
          </Button>
          <p className="text-sm text-muted-foreground">Free to try • No credit card required</p>
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

      {/* Social Proof */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Trusted by 17,000+ creators in 38 countries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neutral-700 text-neutral-700 dark:fill-neutral-300 dark:text-neutral-300" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything custom to create a cool brand
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Easily create professional logos with unlimited designs, modern and unique fonts, custom symbols, and changeable letters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg mb-3">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Recording Demo */}
      <section className="py-20 px-6 bg-neutral-100 dark:bg-neutral-900">
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
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
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
          
          <Card className="max-w-md mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white dark:bg-black dark:text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create your logo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators who have built amazing brands with our logo maker.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Start Creating Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
