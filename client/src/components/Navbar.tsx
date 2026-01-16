import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-background/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer">
            <div className="bg-primary/5 p-2 md:p-2.5 rounded-xl border border-primary/10 group-hover:border-primary/40 transition-all duration-500 group-hover:rotate-[360deg]">
              <Zap className="h-6 w-6 md:h-7 md:h-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg md:text-2xl tracking-tighter leading-none text-white">
                JDK<span className="text-primary group-hover:glow-text transition-all duration-500">ELECTRICAL</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Established Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary relative group",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  location === link.href && "w-full"
                )} />
              </Link>
            ))}
            
            <a 
              href="tel:+27821234567" 
              className="cta-glow flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-white font-bold text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>082 123 4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors z-[110]"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl"
          >
            <div className="container-custom py-24 flex flex-col h-full">
              <div className="flex flex-col gap-8 items-center justify-center flex-grow">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-4xl font-black uppercase tracking-tighter transition-all duration-300",
                      location === link.href ? "text-primary glow-text" : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <a 
                  href="tel:+27821234567" 
                  className="flex items-center justify-center gap-4 bg-primary p-6 rounded-2xl text-primary-foreground font-black text-xl shadow-2xl shadow-primary/40 active:scale-95 transition-transform"
                >
                  <Phone className="h-6 w-6" />
                  <span>Call: 082 123 4567</span>
                </a>
                <p className="text-center text-muted-foreground mt-8 text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">
                  Electrician to light up your world
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
