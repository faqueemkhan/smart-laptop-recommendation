import LaptopCard from "./LaptopCard";

const laptops = [
  {
    brand: "Apple",
    model: 'MacBook Pro 14"',
    processor: "M3 Pro",
    ram: "18GB",
    price: "₹1,69,915", // $1,999
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
  },
  {
    brand: "Dell",
    model: "XPS 15",
    processor: "Intel i7-13700H",
    ram: "32GB",
    price: "₹1,27,415", // $1,499
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
  },
  {
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    processor: "Intel i7-1365U",
    ram: "16GB",
    price: "₹1,40,165", // $1,649
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
  },
  {
    brand: "ASUS",
    model: "ROG Zephyrus G14",
    processor: "AMD Ryzen 9",
    ram: "32GB",
    price: "₹1,52,915", // $1,799
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
  },
  {
    brand: "HP",
    model: "Spectre x360",
    processor: "Intel i7-1355U",
    ram: "16GB",
    price: "₹1,18,915", // $1,399
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    brand: "MSI",
    model: "Creator Z16",
    processor: "Intel i9-13900H",
    ram: "64GB",
    price: "₹2,12,415", // $2,499
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    brand: "Acer",
    model: "Swift 5",
    processor: "Intel i5-1340P",
    ram: "16GB",
    price: "₹84,915", // $999
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=300&fit=crop",
  },
];

const BrandCarousel = () => {
  // Duplicate for seamless loop
  const duplicatedLaptops = [...laptops, ...laptops];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient-primary">Popular</span>{" "}
          <span className="text-foreground">Brands</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Explore laptops from world's leading manufacturers, each offering unique features for every need.
        </p>
      </div>

      {/* First row - scrolling left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 animate-scroll">
          {duplicatedLaptops.map((laptop, index) => (
            <LaptopCard key={`row1-${index}`} {...laptop} />
          ))}
        </div>
      </div>

      {/* Second row - scrolling right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 animate-scroll-reverse">
          {[...duplicatedLaptops].reverse().map((laptop, index) => (
            <LaptopCard key={`row2-${index}`} {...laptop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
