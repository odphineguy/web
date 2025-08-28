import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, BookOpen, Users, Sparkles, Check, Star, Award, Target, Heart, Zap, Facebook, Instagram } from "lucide-react";
import MyPlateCalculator from "@/components/MyPlateCalculator";
import UnicornStudioBackground from "@/components/UnicornStudioBackground";
import Logo from "@/components/Logo";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import ScrollAnimatedTestimonials from "@/components/ScrollAnimatedTestimonials";

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Marketing Director, TechCorp",
    quote: "Omar's holistic approach completely changed my relationship with fitness. I've lost 30 pounds and gained so much energy!"
  },
  {
    name: "Mike Chen",
    company: "Software Engineer, InnovateLab",
    quote: "The nutrition guidance was eye-opening. I never realized how much my diet was holding me back until working with Omar."
  },
  {
    name: "Lisa Rodriguez",
    company: "Nurse, City General Hospital",
    quote: "As a healthcare worker, I appreciate Omar's evidence-based approach. His programs are both effective and sustainable."
  },
  {
    name: "David Thompson",
    company: "CEO, StartupXYZ",
    quote: "Omar helped me build sustainable habits that fit my busy schedule. The results speak for themselves!"
  },
  {
    name: "Emily Watson",
    company: "Teacher, Lincoln High School",
    quote: "I was struggling with energy levels and confidence. Omar's program transformed both my body and mindset."
  },
  {
    name: "James Wilson",
    company: "Firefighter, Metro Fire Dept",
    quote: "The strength training program Omar designed for me has improved my performance on the job significantly."
  },
  {
    name: "Maria Garcia",
    company: "Entrepreneur, Fitness Studio",
    quote: "Omar's business insights combined with his fitness expertise helped me scale my own fitness business."
  },
  {
    name: "Robert Kim",
    company: "Doctor, Medical Center",
    quote: "As a physician, I value evidence-based approaches. Omar's methods are scientifically sound and highly effective."
  },
  {
    name: "Jennifer Lee",
    company: "Architect, Design Firm",
    quote: "The stress management techniques Omar taught me have improved both my health and my work performance."
  },
  {
    name: "Thomas Brown",
    company: "Police Officer, City PD",
    quote: "Omar's program helped me stay in top physical condition for my demanding job. Highly recommended!"
  },
  {
    name: "Amanda Davis",
    company: "Lawyer, Legal Associates",
    quote: "Working with Omar helped me find balance between my demanding career and personal health goals."
  },
  {
    name: "Christopher Martinez",
    company: "Chef, Fine Dining Restaurant",
    quote: "Omar's nutrition advice helped me create healthier menus while maintaining the quality my customers expect."
  },
  {
    name: "Rachel Green",
    company: "Yoga Instructor, Wellness Center",
    quote: "Omar's approach complements my yoga practice perfectly. I've gained strength and flexibility I never thought possible."
  },
  {
    name: "Daniel White",
    company: "Construction Manager, BuildCo",
    quote: "The functional fitness program Omar designed has made my physically demanding job much easier to handle."
  },
  {
    name: "Nicole Taylor",
    company: "Real Estate Agent, Property Pro",
    quote: "Omar helped me build the confidence and energy I needed to excel in my competitive industry."
  },
  {
    name: "Kevin Anderson",
    company: "Sales Director, Tech Solutions",
    quote: "The stress management and fitness program from Omar has improved my sales performance and overall well-being."
  },
  {
    name: "Stephanie Clark",
    company: "Dental Hygienist, Smile Dental",
    quote: "Omar's program helped me overcome back pain and improve my posture for my physically demanding job."
  },
  {
    name: "Michael Lewis",
    company: "Financial Advisor, Wealth Management",
    quote: "The mental clarity and energy I gained from Omar's program has directly improved my client relationships."
  },
  {
    name: "Jessica Hall",
    company: "Event Planner, Celebrations Inc",
    quote: "Omar's stress management techniques have been invaluable for handling the high-pressure world of event planning."
  },
  {
    name: "Andrew Young",
    company: "Electrician, Power Solutions",
    quote: "The strength and flexibility training from Omar has made my physically demanding job much safer and easier."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Primary Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#home" className="text-foreground hover:text-primary transition-colors">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#programs" className="text-foreground hover:text-primary transition-colors">
                    Programs
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#nutrition" className="text-foreground hover:text-primary transition-colors">
                    Nutrition
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="text-foreground hover:text-primary transition-colors">
                    About Omar
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#contact" className="text-foreground hover:text-primary transition-colors">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Side - CTA Buttons & Theme Toggle */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Join Now
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-end">
        {/* Unicorn.studio Interactive Background Element */}
        <div 
          id="unicorn-studio-background"
          className="absolute inset-0 z-0 w-full h-full"
          aria-label="Interactive background element for unicorn.studio integration"
        >
          <UnicornStudioBackground />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl">
              <AnimatedHeadline 
                text="Transform Your Body and Mind"
                className="text-6xl md:text-8xl font-bold text-foreground leading-tight mb-8"
              />
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Join Omar at InAction Fitness for a holistic approach to nutrition and wellness that transforms not just your body, but your entire lifestyle.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Try it out
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose InAction Fitness?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Omar's unique approach combines cutting-edge fitness science with holistic wellness principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Personalized Training</h3>
              <p className="text-muted-foreground">Custom programs tailored to your unique goals and lifestyle</p>
            </div>

            <div className="bg-card p-8 rounded-lg border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Holistic Nutrition</h3>
              <p className="text-muted-foreground">Comprehensive nutrition guidance that nourishes body and mind</p>
            </div>

            <div className="bg-card p-8 rounded-lg border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Community Support</h3>
              <p className="text-muted-foreground">Join a supportive community of like-minded fitness enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Testimonials Marquee */}
      <section className="py-20 overflow-hidden" id="testimonials-section">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Omar has transformed lives through his holistic approach
            </p>
          </div>
        </div>

        {/* Top Row - Animate Left */}
        <div className="relative mb-8" id="testimonials-top-row">
          <ScrollAnimatedTestimonials testimonials={testimonials.slice(0, 10)} direction="left" />
        </div>

        {/* Bottom Row - Animate Right */}
        <div className="relative" id="testimonials-bottom-row">
          <ScrollAnimatedTestimonials testimonials={testimonials.slice(10, 20)} direction="right" />
        </div>
      </section>

      {/* About Omar Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Award className="w-4 h-4 mr-2" />
                Certified Trainer
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet Omar, Your Transformation Guide
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 10 years of experience in fitness and nutrition, Omar has helped hundreds of clients achieve their health and wellness goals through his unique holistic approach.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-foreground">NASM Certified Personal Trainer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Precision Nutrition Certified Coach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Holistic Wellness Specialist</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Omar</h3>
              <p className="text-muted-foreground">Founder & Head Trainer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Transformation Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your journey with flexible plans designed to fit your lifestyle and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">2 Personal Training Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Basic Nutrition Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Weekly Progress Check-ins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Access to Basic Workout Library</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan - Featured */}
            <Card className="relative border-primary shadow-lg scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Most popular choice</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">4 Personal Training Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Customized Nutrition Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Daily Progress Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Full Workout Library Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">24/7 Chat Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Monthly Goal Review</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Choose Pro
                </Button>
              </CardFooter>
            </Card>

            {/* Elite Plan */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Elite</CardTitle>
                <CardDescription>Complete transformation</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Unlimited Personal Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Premium Nutrition Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Real-time Progress Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Exclusive Elite Workouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Priority Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">Bi-weekly Strategy Sessions</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Go Elite
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="nutrition" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Start Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Calculate your personalized nutrition plan and take the first step towards transformation
            </p>
          </div>
          
          {/* MyPlate Calculator */}
          <MyPlateCalculator />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Transform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with Omar to start your fitness journey today
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Omar - Head Trainer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Available for consultations</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 w-full mb-4">
                      Schedule Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Logo />
              <p className="text-muted-foreground mt-4 max-w-md">
                Transform your body and mind with Omar's holistic approach to fitness and nutrition. 
                Join InAction Fitness for sustainable results that last a lifetime.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Programs</a></li>
                <li><a href="#nutrition" className="text-muted-foreground hover:text-primary transition-colors">Nutrition</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Omar</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Ready to start your journey?</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90 mt-2">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 InAction Fitness. All rights reserved. An AbeVision Design.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/InActionFitness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/inactionfitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
