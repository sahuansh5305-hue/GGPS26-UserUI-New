import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy & Terms", path: "/privacynterms" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-primary/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">

        {/* TOP BAR */}
        <span className="flex items-center justify-between h-16">

          {/* Desktop Navigation */}
          <span className="hidden md:flex items-center space-x-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-primary-foreground/80 hover:text-gold transition-colors font-medium",
                  location.pathname === link.path &&
                    "text-gold border-b-2 border-gold pb-1"
                )}
              >
                {link.name}
              </Link>
            ))}
          </span>

          {/* Mobile Menu Button (RIGHT SIDE) */}
          <button
            className="md:hidden text-primary-foreground ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </span>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 text-primary-foreground/80 hover:text-gold transition-colors",
                  location.pathname === link.path &&
                    "text-gold font-medium"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
