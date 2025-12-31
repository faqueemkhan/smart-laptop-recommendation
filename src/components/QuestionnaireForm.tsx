import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  ChevronLeft, 
  ChevronRight, 
  DollarSign, 
  User, 
  Cpu, 
  Gamepad2, 
  Monitor, 
  Battery, 
  Building, 
  Settings2, 
  Clock, 
  SlidersHorizontal 
} from "lucide-react";

export interface FormData {
  // Step 1: Budget
  minBudget: string;
  maxBudget: string;
  budgetCategory: string;
  priceFlexibility: string;
  
  // Step 2: User Profile
  userType: string;
  usagePurposes: string[];
  
  // Step 3: Performance
  processor: string;
  ram: string;
  storageType: string;
  storageSize: string;
  
  // Step 4: Graphics
  needsDedicatedGpu: string;
  gpuBrand: string;
  gamingLevel: string;
  
  // Step 5: Display
  screenSize: string;
  displayType: string;
  resolution: string;
  touchscreen: string;
  
  // Step 6: Portability
  batteryImportance: string;
  weightPreference: string;
  frequentTravel: string;
  
  // Step 7: Brand
  preferredBrands: string[];
  buildQuality: string;
  
  // Step 8: OS
  operatingSystem: string;
  softwareNeeds: string[];
  
  // Step 9: Future-proofing
  usageDuration: string;
  upgradeabilityNeeds: string[];
  
  // Step 10: Preference Weighting
  performanceVsBattery: number[];
  priceVsBrand: number[];
  portabilityVsPower: number[];
}

interface QuestionnaireFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  submitButtonText: string;
  submitButtonIcon: React.ReactNode;
  loadingText: string;
  variant?: "primary" | "accent";
}

const steps = [
  { id: 1, title: "Budget & Price", icon: DollarSign },
  { id: 2, title: "User Profile", icon: User },
  { id: 3, title: "Performance", icon: Cpu },
  { id: 4, title: "Graphics & Gaming", icon: Gamepad2 },
  { id: 5, title: "Display & Design", icon: Monitor },
  { id: 6, title: "Portability & Battery", icon: Battery },
  { id: 7, title: "Brand & Build", icon: Building },
  { id: 8, title: "OS & Software", icon: Settings2 },
  { id: 9, title: "Future-Proofing", icon: Clock },
  { id: 10, title: "Preferences", icon: SlidersHorizontal },
];

const QuestionnaireForm = ({
  formData,
  setFormData,
  onSubmit,
  isLoading,
  submitButtonText,
  submitButtonIcon,
  loadingText,
  variant = "primary",
}: QuestionnaireFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const updateField = (field: keyof FormData, value: string | string[] | number[]) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    if (currentValues.includes(value)) {
      updateField(field, currentValues.filter(v => v !== value));
    } else {
      updateField(field, [...currentValues, value]);
    }
  };

  const nextStep = () => {
    if (currentStep < 10) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Budget & Price Range
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Minimum Budget ($)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.minBudget}
                  onChange={(e) => updateField("minBudget", e.target.value)}
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <Label>Maximum Budget ($)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 2000"
                  value={formData.maxBudget}
                  onChange={(e) => updateField("maxBudget", e.target.value)}
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Budget Category</Label>
              <Select value={formData.budgetCategory} onValueChange={(v) => updateField("budgetCategory", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget Laptop (Under $600)</SelectItem>
                  <SelectItem value="mid-range">Mid-Range ($600 - $1200)</SelectItem>
                  <SelectItem value="premium">Premium ($1200 - $2000)</SelectItem>
                  <SelectItem value="high-end">High-End ($2000+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Is your budget flexible?</Label>
              <RadioGroup value={formData.priceFlexibility} onValueChange={(v) => updateField("priceFlexibility", v)} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed" id="fixed" />
                  <Label htmlFor="fixed" className="cursor-pointer">Fixed Budget</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible" className="cursor-pointer">Flexible (±15%)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-flexible" id="very-flexible" />
                  <Label htmlFor="very-flexible" className="cursor-pointer">Very Flexible</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              User Profile
            </h3>

            <div className="space-y-2">
              <Label>Who are you?</Label>
              <Select value={formData.userType} onValueChange={(v) => updateField("userType", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="professional">Working Professional</SelectItem>
                  <SelectItem value="gamer">Gamer</SelectItem>
                  <SelectItem value="creator">Content Creator</SelectItem>
                  <SelectItem value="business">Business User</SelectItem>
                  <SelectItem value="casual">Casual User</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Primary Usage Purposes (Select all that apply)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Programming", "Gaming", "Video Editing", "Graphic Design", "Office Work", "Online Classes", "Web Browsing", "3D Modeling", "Music Production"].map((purpose) => (
                  <div key={purpose} className="flex items-center space-x-2">
                    <Checkbox
                      id={purpose}
                      checked={formData.usagePurposes.includes(purpose)}
                      onCheckedChange={() => toggleArrayValue("usagePurposes", purpose)}
                    />
                    <Label htmlFor={purpose} className="cursor-pointer text-sm">{purpose}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              Performance Requirements
            </h3>

            <div className="space-y-2">
              <Label>Preferred Processor</Label>
              <Select value={formData.processor} onValueChange={(v) => updateField("processor", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select processor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intel-i3">Intel Core i3</SelectItem>
                  <SelectItem value="intel-i5">Intel Core i5</SelectItem>
                  <SelectItem value="intel-i7">Intel Core i7</SelectItem>
                  <SelectItem value="intel-i9">Intel Core i9</SelectItem>
                  <SelectItem value="amd-ryzen3">AMD Ryzen 3</SelectItem>
                  <SelectItem value="amd-ryzen5">AMD Ryzen 5</SelectItem>
                  <SelectItem value="amd-ryzen7">AMD Ryzen 7</SelectItem>
                  <SelectItem value="amd-ryzen9">AMD Ryzen 9</SelectItem>
                  <SelectItem value="apple-m1">Apple M1</SelectItem>
                  <SelectItem value="apple-m2">Apple M2</SelectItem>
                  <SelectItem value="apple-m3">Apple M3</SelectItem>
                  <SelectItem value="any">No Preference</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Minimum RAM Required</Label>
              <Select value={formData.ram} onValueChange={(v) => updateField("ram", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select RAM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4gb">4 GB</SelectItem>
                  <SelectItem value="8gb">8 GB</SelectItem>
                  <SelectItem value="16gb">16 GB</SelectItem>
                  <SelectItem value="32gb">32 GB</SelectItem>
                  <SelectItem value="64gb">64 GB</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Storage Type</Label>
                <Select value={formData.storageType} onValueChange={(v) => updateField("storageType", v)}>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ssd">SSD (Faster)</SelectItem>
                    <SelectItem value="hdd">HDD (More Storage)</SelectItem>
                    <SelectItem value="hybrid">Hybrid (SSD + HDD)</SelectItem>
                    <SelectItem value="any">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Minimum Storage Size</Label>
                <Select value={formData.storageSize} onValueChange={(v) => updateField("storageSize", v)}>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="256gb">256 GB</SelectItem>
                    <SelectItem value="512gb">512 GB</SelectItem>
                    <SelectItem value="1tb">1 TB</SelectItem>
                    <SelectItem value="2tb">2 TB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-primary" />
              Graphics & Gaming
            </h3>

            <div className="space-y-2">
              <Label>Do you need a dedicated GPU?</Label>
              <RadioGroup value={formData.needsDedicatedGpu} onValueChange={(v) => updateField("needsDedicatedGpu", v)} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="gpu-yes" />
                  <Label htmlFor="gpu-yes" className="cursor-pointer">Yes, Essential</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="preferred" id="gpu-preferred" />
                  <Label htmlFor="gpu-preferred" className="cursor-pointer">Preferred</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="gpu-no" />
                  <Label htmlFor="gpu-no" className="cursor-pointer">Not Required</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>GPU Brand Preference</Label>
              <Select value={formData.gpuBrand} onValueChange={(v) => updateField("gpuBrand", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select GPU brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nvidia">NVIDIA GeForce</SelectItem>
                  <SelectItem value="amd">AMD Radeon</SelectItem>
                  <SelectItem value="integrated">Integrated Graphics</SelectItem>
                  <SelectItem value="any">No Preference</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Gaming Intensity</Label>
              <Select value={formData.gamingLevel} onValueChange={(v) => updateField("gamingLevel", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select gaming level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Gaming</SelectItem>
                  <SelectItem value="casual">Casual Gaming</SelectItem>
                  <SelectItem value="moderate">Moderate Gaming</SelectItem>
                  <SelectItem value="heavy">Heavy / AAA Gaming</SelectItem>
                  <SelectItem value="esports">Competitive / eSports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              Display & Design
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Screen Size</Label>
                <Select value={formData.screenSize} onValueChange={(v) => updateField("screenSize", v)}>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="13">13" (Ultra Portable)</SelectItem>
                    <SelectItem value="14">14" (Portable)</SelectItem>
                    <SelectItem value="15.6">15.6" (Standard)</SelectItem>
                    <SelectItem value="16">16" (Large)</SelectItem>
                    <SelectItem value="17">17"+ (Desktop Replacement)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Display Type</Label>
                <Select value={formData.displayType} onValueChange={(v) => updateField("displayType", v)}>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lcd">LCD / TN</SelectItem>
                    <SelectItem value="ips">IPS (Better Colors)</SelectItem>
                    <SelectItem value="oled">OLED (Best Quality)</SelectItem>
                    <SelectItem value="mini-led">Mini-LED</SelectItem>
                    <SelectItem value="any">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Resolution</Label>
              <Select value={formData.resolution} onValueChange={(v) => updateField("resolution", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select resolution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hd">HD (1366x768)</SelectItem>
                  <SelectItem value="fhd">Full HD (1920x1080)</SelectItem>
                  <SelectItem value="2k">2K / QHD (2560x1440)</SelectItem>
                  <SelectItem value="4k">4K UHD (3840x2160)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Touchscreen Required?</Label>
              <RadioGroup value={formData.touchscreen} onValueChange={(v) => updateField("touchscreen", v)} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="touch-yes" />
                  <Label htmlFor="touch-yes" className="cursor-pointer">Yes, Required</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="preferred" id="touch-preferred" />
                  <Label htmlFor="touch-preferred" className="cursor-pointer">Nice to Have</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="touch-no" />
                  <Label htmlFor="touch-no" className="cursor-pointer">Not Needed</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Battery className="w-5 h-5 text-primary" />
              Portability & Battery
            </h3>

            <div className="space-y-2">
              <Label>Battery Life Importance</Label>
              <Select value={formData.batteryImportance} onValueChange={(v) => updateField("batteryImportance", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select importance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (Always plugged in)</SelectItem>
                  <SelectItem value="medium">Medium (4-6 hours)</SelectItem>
                  <SelectItem value="high">High (8+ hours)</SelectItem>
                  <SelectItem value="critical">Critical (All-day battery)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Weight Preference</Label>
              <Select value={formData.weightPreference} onValueChange={(v) => updateField("weightPreference", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ultralight">Ultra-light (Under 1.5kg)</SelectItem>
                  <SelectItem value="light">Light (1.5-2kg)</SelectItem>
                  <SelectItem value="medium">Medium (2-2.5kg)</SelectItem>
                  <SelectItem value="heavy">No Preference (2.5kg+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Will you travel frequently with this laptop?</Label>
              <RadioGroup value={formData.frequentTravel} onValueChange={(v) => updateField("frequentTravel", v)} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="travel-yes" />
                  <Label htmlFor="travel-yes" className="cursor-pointer">Yes, Daily</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sometimes" id="travel-sometimes" />
                  <Label htmlFor="travel-sometimes" className="cursor-pointer">Sometimes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="travel-no" />
                  <Label htmlFor="travel-no" className="cursor-pointer">Rarely / Never</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Brand & Build Quality
            </h3>

            <div className="space-y-3">
              <Label>Preferred Brands (Select all acceptable)</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["HP", "Dell", "Lenovo", "ASUS", "Apple", "Acer", "MSI", "Microsoft", "Samsung", "LG", "Razer", "Any"].map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={formData.preferredBrands.includes(brand)}
                      onCheckedChange={() => toggleArrayValue("preferredBrands", brand)}
                    />
                    <Label htmlFor={brand} className="cursor-pointer text-sm">{brand}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Build Quality Priority</Label>
              <Select value={formData.buildQuality} onValueChange={(v) => updateField("buildQuality", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget-Focused (Plastic OK)</SelectItem>
                  <SelectItem value="balanced">Balanced (Good Materials)</SelectItem>
                  <SelectItem value="premium">Premium (Metal, High Quality)</SelectItem>
                  <SelectItem value="military">Military-Grade Durability</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-primary" />
              Operating System & Software
            </h3>

            <div className="space-y-2">
              <Label>Preferred Operating System</Label>
              <Select value={formData.operatingSystem} onValueChange={(v) => updateField("operatingSystem", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select OS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="windows11">Windows 11</SelectItem>
                  <SelectItem value="windows10">Windows 10</SelectItem>
                  <SelectItem value="macos">macOS</SelectItem>
                  <SelectItem value="linux">Linux</SelectItem>
                  <SelectItem value="chromeos">Chrome OS</SelectItem>
                  <SelectItem value="any">No Preference</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Software Compatibility Needs</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Microsoft Office", 
                  "Adobe Creative Suite", 
                  "Programming IDEs", 
                  "Video Editing Software", 
                  "CAD Software", 
                  "Gaming Platforms",
                  "Virtual Machines",
                  "3D Rendering"
                ].map((software) => (
                  <div key={software} className="flex items-center space-x-2">
                    <Checkbox
                      id={software}
                      checked={formData.softwareNeeds.includes(software)}
                      onCheckedChange={() => toggleArrayValue("softwareNeeds", software)}
                    />
                    <Label htmlFor={software} className="cursor-pointer text-sm">{software}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Future-Proofing
            </h3>

            <div className="space-y-2">
              <Label>How long do you plan to use this laptop?</Label>
              <Select value={formData.usageDuration} onValueChange={(v) => updateField("usageDuration", v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 Years (Short-term)</SelectItem>
                  <SelectItem value="3-4">3-4 Years (Standard)</SelectItem>
                  <SelectItem value="5+">5+ Years (Long-term)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Upgradeability Requirements</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "RAM Upgradable",
                  "Storage Upgradable",
                  "Easy to Open/Maintain",
                  "Thunderbolt/USB4 Ports"
                ].map((upgrade) => (
                  <div key={upgrade} className="flex items-center space-x-2">
                    <Checkbox
                      id={upgrade}
                      checked={formData.upgradeabilityNeeds.includes(upgrade)}
                      onCheckedChange={() => toggleArrayValue("upgradeabilityNeeds", upgrade)}
                    />
                    <Label htmlFor={upgrade} className="cursor-pointer text-sm">{upgrade}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              Preference Weighting
            </h3>
            <p className="text-sm text-muted-foreground">
              Drag the sliders to indicate your priorities. Left = first option, Right = second option.
            </p>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-primary font-medium">Performance</span>
                  <span className="text-accent font-medium">Battery Life</span>
                </div>
                <Slider
                  value={formData.performanceVsBattery}
                  onValueChange={(v) => updateField("performanceVsBattery", v)}
                  min={0}
                  max={100}
                  step={10}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-primary font-medium">Lower Price</span>
                  <span className="text-accent font-medium">Premium Brand</span>
                </div>
                <Slider
                  value={formData.priceVsBrand}
                  onValueChange={(v) => updateField("priceVsBrand", v)}
                  min={0}
                  max={100}
                  step={10}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-primary font-medium">Portability</span>
                  <span className="text-accent font-medium">Raw Power</span>
                </div>
                <Slider
                  value={formData.portabilityVsPower}
                  onValueChange={(v) => updateField("portabilityVsPower", v)}
                  min={0}
                  max={100}
                  step={10}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
        <div className="flex items-center gap-1">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                type="button"
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all ${
                  currentStep === step.id
                    ? "bg-primary text-primary-foreground"
                    : currentStep > step.id
                    ? "bg-accent/20 text-accent"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step.id}
              </button>
              {index < steps.length - 1 && (
                <div className={`w-4 h-0.5 ${currentStep > step.id ? "bg-accent" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Title */}
      <div className="text-center mb-6">
        <span className="text-sm text-muted-foreground">Step {currentStep} of 10</span>
        <h2 className="text-lg font-semibold text-foreground">{steps[currentStep - 1].title}</h2>
      </div>

      {/* Step Content */}
      <div className="min-h-[300px]">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        {currentStep < 10 ? (
          <Button
            type="button"
            variant={variant}
            onClick={nextStep}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            variant={variant}
            size="lg"
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                {loadingText}
              </>
            ) : (
              <>
                {submitButtonIcon}
                {submitButtonText}
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
};

export default QuestionnaireForm;
