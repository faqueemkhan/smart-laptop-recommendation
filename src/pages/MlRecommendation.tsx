import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Brain, ArrowLeft, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import QuestionnaireForm, { FormData } from "@/components/QuestionnaireForm";

interface MlResult {
  id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  display: string;
  battery: string;
  weight: string;
  price: string;
  matchScore: number;
  reason: string;
  strengths: string[];
}

const initialFormData: FormData = {
  minBudget: "",
  maxBudget: "",
  budgetCategory: "",
  priceFlexibility: "",
  userType: "",
  usagePurposes: [],
  processor: "",
  ram: "",
  storageType: "",
  storageSize: "",
  needsDedicatedGpu: "",
  gpuBrand: "",
  gamingLevel: "",
  screenSize: "",
  displayType: "",
  resolution: "",
  touchscreen: "",
  batteryImportance: "",
  weightPreference: "",
  frequentTravel: "",
  preferredBrands: [],
  buildQuality: "",
  operatingSystem: "",
  softwareNeeds: [],
  usageDuration: "",
  upgradeabilityNeeds: [],
  performanceVsBattery: [50],
  priceVsBrand: [50],
  portabilityVsPower: [50],
};

const MlRecommendation = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<MlResult[]>([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.maxBudget || !formData.userType) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least budget and user type.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // TODO: Connect to your ML model endpoint here
    // const response = await fetch("YOUR_ML_MODEL_ENDPOINT", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData)
    // });
    // const predictions = await response.json();
    
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock ML results - Replace with actual model response
      const mockResults: MlResult[] = [
        { 
          id: 1, 
          brand: "ASUS", 
          model: "ROG Zephyrus G14 (2024)", 
          processor: "AMD Ryzen 9 8945HS", 
          ram: "32GB DDR5-5600", 
          storage: "1TB PCIe 4.0 SSD", 
          gpu: "NVIDIA RTX 4060",
          display: "14\" QHD+ 165Hz OLED",
          battery: "76Wh (10+ hours)",
          weight: "1.65 kg",
          price: "$1,799", 
          matchScore: 97,
          reason: "Our ML model identified this as the optimal balance between your performance needs and portability preferences.",
          strengths: ["Gaming Performance", "Battery Life", "Build Quality", "Display Quality"]
        },
        { 
          id: 2, 
          brand: "Apple", 
          model: "MacBook Pro 16\" M3 Max", 
          processor: "Apple M3 Max", 
          ram: "48GB Unified Memory", 
          storage: "1TB SSD", 
          gpu: "Integrated 40-core",
          display: "16.2\" Liquid Retina XDR",
          battery: "100Wh (22+ hours)",
          weight: "2.14 kg",
          price: "$3,499", 
          matchScore: 94,
          reason: "Exceptional for creative workflows with industry-leading battery life and unified memory architecture.",
          strengths: ["Pro Creative Work", "Best-in-class Battery", "macOS Ecosystem", "Silent Operation"]
        },
        { 
          id: 3, 
          brand: "Dell", 
          model: "XPS 17 9730", 
          processor: "Intel Core i9-13900H", 
          ram: "64GB DDR5", 
          storage: "2TB NVMe SSD", 
          gpu: "NVIDIA RTX 4070",
          display: "17\" 4K UHD+ Touch",
          battery: "97Wh (8+ hours)",
          weight: "2.44 kg",
          price: "$2,899", 
          matchScore: 91,
          reason: "Perfect workstation replacement with maximum upgradeability and stunning 4K display.",
          strengths: ["Large Display", "Workstation Power", "Upgradeability", "Premium Build"]
        },
        { 
          id: 4, 
          brand: "Lenovo", 
          model: "ThinkPad P1 Gen 6", 
          processor: "Intel Core i7-13800H", 
          ram: "32GB DDR5", 
          storage: "1TB SSD", 
          gpu: "NVIDIA RTX A1000",
          display: "16\" 3.2K OLED",
          battery: "90Wh (12+ hours)",
          weight: "1.86 kg",
          price: "$2,499", 
          matchScore: 88,
          reason: "Enterprise-grade reliability with professional GPU for CAD and 3D rendering workflows.",
          strengths: ["Professional GPU", "Enterprise Features", "Durability", "ISV Certification"]
        },
        { 
          id: 5, 
          brand: "MSI", 
          model: "Creator Z17 HX Studio", 
          processor: "Intel Core i9-13980HX", 
          ram: "64GB DDR5", 
          storage: "2TB NVMe SSD", 
          gpu: "NVIDIA RTX 4080",
          display: "17\" QHD+ 165Hz Mini-LED",
          battery: "90Wh (6+ hours)",
          weight: "2.79 kg",
          price: "$3,999", 
          matchScore: 85,
          reason: "Maximum performance for demanding creative and gaming workloads with top-tier GPU.",
          strengths: ["Max Performance", "High-end GPU", "Creator Focused", "4K Video Editing"]
        },
      ];
      
      setResults(mockResults);
      toast({
        title: "ML Analysis Complete!",
        description: "Your personalized recommendations are ready based on 47 parameters.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>ML-Based Recommendation | Smart Laptop</title>
        <meta name="description" content="Get personalized laptop recommendations using our advanced Machine Learning model with comprehensive analysis." />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/recommend" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Methods
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-gradient-accent">ML-Based</span>{" "}
                <span className="text-foreground">Recommendation</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our Machine Learning model analyzes 47+ parameters from your responses to find your perfect laptop match.
              </p>
            </div>

            {/* Questionnaire Form */}
            <div className="glass-card rounded-3xl p-8 mb-12">
              <QuestionnaireForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                submitButtonText="Generate ML Recommendations"
                submitButtonIcon={<Brain className="w-5 h-5" />}
                loadingText="Analyzing with ML Model..."
                variant="accent"
              />
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">
                    <span className="text-foreground">ML-Ranked</span>{" "}
                    <span className="text-gradient-accent">Results</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2">
                    Personalized for your {formData.userType} profile • Budget: ${formData.minBudget || "0"} - ${formData.maxBudget}
                  </p>
                </div>
                
                <div className="grid gap-4">
                  {results.map((laptop, index) => (
                    <div
                      key={laptop.id}
                      className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all"
                    >
                      <div className="flex flex-col gap-4">
                        {/* Header Row */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div className="relative shrink-0">
                            {index === 0 && (
                              <Trophy className="absolute -top-2 -right-2 w-5 h-5 text-yellow-500" />
                            )}
                            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10">
                              <span className="text-accent font-bold text-xl">{laptop.matchScore}%</span>
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="px-2 py-1 rounded-lg bg-accent/20 text-accent text-xs font-medium">
                                {laptop.brand}
                              </span>
                              {index === 0 && (
                                <span className="px-2 py-1 rounded-lg bg-yellow-500/20 text-yellow-500 text-xs font-medium flex items-center gap-1">
                                  <Sparkles className="w-3 h-3" />
                                  Best Match
                                </span>
                              )}
                            </div>
                            <h3 className="font-semibold text-xl text-foreground">{laptop.model}</h3>
                          </div>
                          
                          <div className="text-right shrink-0">
                            <div className="text-2xl font-bold text-gradient-accent">{laptop.price}</div>
                            <div className="text-sm text-muted-foreground">Match Score</div>
                          </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Processor</span>
                            <p className="text-foreground font-medium">{laptop.processor}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Memory</span>
                            <p className="text-foreground font-medium">{laptop.ram}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Storage</span>
                            <p className="text-foreground font-medium">{laptop.storage}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Graphics</span>
                            <p className="text-foreground font-medium">{laptop.gpu}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Display</span>
                            <p className="text-foreground font-medium">{laptop.display}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Battery</span>
                            <p className="text-foreground font-medium">{laptop.battery}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-muted-foreground text-xs">Weight</span>
                            <p className="text-foreground font-medium">{laptop.weight}</p>
                          </div>
                        </div>

                        {/* Strengths */}
                        <div className="flex flex-wrap gap-2">
                          {laptop.strengths.map((strength) => (
                            <span key={strength} className="px-2 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border">
                              {strength}
                            </span>
                          ))}
                        </div>

                        {/* ML Reason */}
                        <p className="text-sm text-accent/80 italic border-l-2 border-accent/30 pl-3">
                          {laptop.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default MlRecommendation;
