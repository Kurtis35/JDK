import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Zap className="h-6 w-6 text-primary group-hover:text-primary animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight leading-none text-white">
                JDK<span className="text-primary">Electrical</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
                Reliable & Safe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            <a 
              href="tel:+27821234567" 
              className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
              <Phone className="h-4 w-4" />
              <span>082 123 4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-background">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-white/5",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="tel:+27821234567" 
              className="flex items-center justify-center gap-2 bg-primary px-4 py-3 rounded-xl text-primary-foreground font-semibold mt-4"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: 082 123 4567</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
