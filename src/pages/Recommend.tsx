import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Brain, ArrowRight, Database, Cpu } from "lucide-react";

const Recommend = () => {
  return (
    <>
      <Helmet>
        <title>Choose Recommendation Method | Smart Laptop</title>
        <meta name="description" content="Select between API-based or ML-based laptop recommendations for personalized suggestions." />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Choose Your</span>{" "}
                <span className="text-gradient-primary">Method</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select between our powerful API integration or advanced Machine Learning model for personalized laptop recommendations.
              </p>
            </div>

            {/* Options */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* API Option */}
              <Link to="/api-recommendation" className="group">
                <div className="glass-card rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-3">API-Based</h2>
                    <p className="text-muted-foreground mb-6">
                      Get real-time laptop recommendations from our comprehensive API database with up-to-date pricing and specifications.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-foreground">Real-time data</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-foreground">Latest prices</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-foreground">500+ laptop models</span>
                      </div>
                    </div>
                    
                    <Button variant="primary" size="lg" className="w-full group-hover:scale-105 transition-transform">
                      Try API Method
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>

              {/* ML Option */}
              <Link to="/ml-recommendation" className="group">
                <div className="glass-card rounded-3xl p-8 h-full hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                      <Cpu className="w-8 h-8 text-accent" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-3">ML-Based</h2>
                    <p className="text-muted-foreground mb-6">
                      Our Machine Learning model analyzes your preferences to provide highly personalized laptop recommendations.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-sm">
                        <Brain className="w-4 h-4 text-accent" />
                        <span className="text-foreground">Personalized results</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Brain className="w-4 h-4 text-accent" />
                        <span className="text-foreground">Smart ranking</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Brain className="w-4 h-4 text-accent" />
                        <span className="text-foreground">Usage-based suggestions</span>
                      </div>
                    </div>
                    
                    <Button variant="accent" size="lg" className="w-full group-hover:scale-105 transition-transform">
                      Try ML Method
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Recommend;
