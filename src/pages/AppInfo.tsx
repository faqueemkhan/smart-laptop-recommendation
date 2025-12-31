import { Helmet } from "react-helmet-async";
import { Code, Database, Brain, Cpu, Zap, Shield, Globe, Layers } from "lucide-react";

const technologies = [
  { icon: Code, name: "React", description: "Modern UI framework" },
  { icon: Layers, name: "TypeScript", description: "Type-safe development" },
  { icon: Database, name: "API Integration", description: "Real-time data" },
  { icon: Brain, name: "Machine Learning", description: "Smart predictions" },
];

const features = [
  {
    icon: Zap,
    title: "Real-Time API",
    description: "Connect to comprehensive laptop databases for up-to-date specifications and pricing information.",
  },
  {
    icon: Brain,
    title: "ML Model",
    description: "Our trained machine learning model provides personalized recommendations based on your unique requirements.",
  },
  {
    icon: Shield,
    title: "Trusted Data",
    description: "All recommendations come from verified sources and reputable laptop manufacturers.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access laptops from major brands worldwide including Apple, Dell, HP, Lenovo, ASUS, and more.",
  },
];

const AppInfo = () => {
  return (
    <>
      <Helmet>
        <title>App Information | Smart Laptop Recommendation</title>
        <meta name="description" content="Learn about the technologies and features behind the Smart Laptop Recommendation system." />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">About</span>{" "}
                <span className="text-gradient-primary">Smart Laptop</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A professional-grade laptop recommendation system combining API data and Machine Learning for intelligent suggestions.
              </p>
            </div>

            {/* Purpose Section */}
            <div className="glass-card rounded-3xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smart Laptop Recommendation is designed to simplify the laptop selection process. 
                With hundreds of options available in the market, finding the right laptop can be overwhelming. 
                Our system uses advanced algorithms and real-time data to match users with their ideal laptop 
                based on budget, usage requirements, and personal preferences.
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="text-foreground">Built With</span>{" "}
                <span className="text-gradient-primary">Modern Tech</span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                      <tech.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="text-foreground">Key</span>{" "}
                <span className="text-gradient-accent">Features</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Enter Your Requirements</h3>
                    <p className="text-muted-foreground text-sm">Specify your budget, preferred usage type, and any brand preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Choose Your Method</h3>
                    <p className="text-muted-foreground text-sm">Select between API-based real-time data or ML-based personalized analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Get Recommendations</h3>
                    <p className="text-muted-foreground text-sm">Receive ranked laptop suggestions tailored to your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppInfo;
