import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import QuestionnaireForm, { FormData } from "@/components/QuestionnaireForm";

interface LaptopResult {
  id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  gpu: string;
  display: string;
  price: string; // INR price
  rating: number;
  matchReason: string;
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

const ApiRecommendation = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<LaptopResult[]>([]);
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

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const mockResults: LaptopResult[] = [
        {
          id: 1,
          brand: "Dell",
          model: "XPS 15 9530",
          processor: "Intel Core i7-13700H",
          ram: "32GB DDR5",
          storage: "1TB NVMe SSD",
          gpu: "NVIDIA RTX 4060",
          display: '15.6" 3.5K OLED',
          price: "₹1,61,415",
          rating: 4.8,
          matchReason:
            "Excellent match for programming and design needs with premium OLED display",
        },
        {
          id: 2,
          brand: "Apple",
          model: 'MacBook Pro 14" M3 Pro',
          processor: "Apple M3 Pro",
          ram: "18GB Unified",
          storage: "512GB SSD",
          gpu: "Integrated 14-core",
          display: '14.2" Liquid Retina XDR',
          price: "₹1,69,915",
          rating: 4.9,
          matchReason:
            "Best-in-class battery life and performance for creative professionals",
        },
        {
          id: 3,
          brand: "Lenovo",
          model: "ThinkPad X1 Carbon Gen 11",
          processor: "Intel Core i7-1365U",
          ram: "16GB LPDDR5",
          storage: "512GB SSD",
          gpu: "Intel Iris Xe",
          display: '14" 2.8K OLED',
          price: "₹1,40,165",
          rating: 4.7,
          matchReason:
            "Ultra-portable with military-grade durability and all-day battery",
        },
        {
          id: 4,
          brand: "ASUS",
          model: "ROG Zephyrus G16",
          processor: "Intel Core i9-14900HX",
          ram: "32GB DDR5",
          storage: "1TB SSD",
          gpu: "NVIDIA RTX 4070",
          display: '16" QHD+ 240Hz',
          price: "₹1,86,915",
          rating: 4.6,
          matchReason:
            "Powerful gaming and creative workstation in a sleek form factor",
        },
      ];

      setResults(mockResults);

      toast({
        title: "Recommendations Ready!",
        description: `Found ${mockResults.length} laptops matching your criteria.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>API-Based Recommendation | Smart Laptop</title>
        <meta
          name="description"
          content="Laptop recommendations with prices in Indian Rupees (₹)"
        />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/recommend"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Methods
            </Link>

            <div className="glass-card rounded-3xl p-8 mb-12">
              <QuestionnaireForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                submitButtonText="Get API Recommendations"
                submitButtonIcon={<Zap className="w-5 h-5" />}
                loadingText="Fetching Recommendations..."
                variant="primary"
              />
            </div>

            {results.length > 0 && (
              <div className="space-y-4">
                {results.map((laptop, index) => (
                  <div
                    key={laptop.id}
                    className="glass-card rounded-2xl p-6"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">
                        #{index + 1} {laptop.brand} {laptop.model}
                      </h3>
                      <div className="text-2xl font-bold text-gradient-primary">
                        {laptop.price}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {laptop.matchReason}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ApiRecommendation;
