import { cn } from "@/lib/utils";

interface LaptopCardProps {
  brand: string;
  model: string;
  processor: string;
  ram: string;
  price: string; // Price in INR (₹)
  image: string;
  className?: string;
}

const LaptopCard = ({
  brand,
  model,
  processor,
  ram,
  price,
  image,
  className,
}: LaptopCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex-shrink-0 w-72 glass-card rounded-2xl p-5 transition-all duration-500 hover:scale-105 hover:border-primary/30",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image */}
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-muted">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-xs font-semibold text-primary-foreground">
          {brand}
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        <h3 className="font-semibold text-lg text-foreground truncate">
          {model}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">CPU:</span>
            <span className="text-foreground font-medium">{processor}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">RAM:</span>
            <span className="text-foreground font-medium">{ram}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <span className="text-gradient-primary text-xl font-bold">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;
