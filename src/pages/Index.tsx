import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import BrandCarousel from "@/components/BrandCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant recommendations powered by real-time API data and optimized algorithms.",
  },
  {
    icon: Target,
    title: "Precision Match",
    description: "Our ML model analyzes your requirements to find the perfect laptop for your needs.",
  },
  {
    icon: Shield,
    title: "Trusted Brands",
    description: "Recommendations from verified manufacturers including Apple, Dell, HP, and more.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Smart Laptop Recommendation | AI-Powered Laptop Finder</title>
        <meta name="description" content="Find your perfect laptop using AI and real-time data. Get personalized recommendations from top brands like Apple, Dell, HP, Lenovo, and more." />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <BrandCarousel />

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Choose</span>{" "}
                <span className="text-gradient-primary">Smart Laptop?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our intelligent system combines multiple data sources to provide accurate recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Find Your <span className="text-gradient-primary">Perfect Laptop?</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Choose your preferred recommendation method and let our system guide you to the best options.
                </p>
                <Link to="/recommend">
                  <Button variant="primary" size="xl" className="group">
                    Get Started
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
       <footer className="border-t border-border bg-background/80 backdrop-blur">
  <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Brand Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gradient-primary">
          Smart Laptop Recommendation
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          An intelligent laptop recommendation system that helps users choose
          the perfect laptop based on budget, performance, and personal needs.
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Quick Links
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recommend"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Recommendations
            </Link>
          </li>
          <li>
            <Link
              to="/app-info"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              App Info
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Features
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>AI-Based Recommendations</li>
          <li>Budget-Friendly Suggestions</li>
          <li>Performance Comparison</li>
          <li>Indian Price Support (₹)</li>
        </ul>
      </div>

      {/* Contact / Social */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Connect
        </h4>
        <p className="text-sm text-muted-foreground">
          Have questions or feedback?  
          Get in touch with us.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
          >
            🌐
          </a>
          <a
            href="#"
            
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
          >
            📧
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
          >
            📱
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
     <p className="text-xs text-muted-foreground w-full text-center">
  © 2025 Smart Laptop Recommendation. All rights reserved.
</p>

      <p className="text-xs text-muted-foreground">
        Designed & Developed by <span className="text-foreground font-medium">Your Name</span>
      </p>
    </div>
  </div>
</footer>

      </main>
    </>
  );
};

export default Index;
