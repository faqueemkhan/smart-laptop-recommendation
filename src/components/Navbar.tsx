import { Link, useLocation } from "react-router-dom";
import { Laptop, Home, Info, Mail, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/recommend", label: "Recommend", icon: Cpu },
  { path: "/app-info", label: "App Info", icon: Info },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-lg blur-lg group-hover:bg-primary/50 transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-2 rounded-lg">
                <Laptop className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="font-bold text-lg hidden sm:block">
              <span className="text-gradient-primary">Smart</span>
              <span className="text-foreground">Laptop</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
