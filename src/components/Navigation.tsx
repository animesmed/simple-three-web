import logo from "@/assets/imgs/IgnitionForce_logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Presentation" },
    { path: "/team", label: "Team" },
    { path: "/simulator", label: "Simulator" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <img
                src={logo}
                alt="Ignition Force Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gradient">Ignition Force</span>
          </Link>

          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary glow-effect" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
