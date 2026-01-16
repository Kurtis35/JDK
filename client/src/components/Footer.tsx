import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-white/5 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">
                JDK<span className="text-primary">Electrical</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Professional electrical services you can trust. Fully licensed and insured electricians serving residential and commercial clients.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Installations",
                "Maintenance",
                "DB Boards",
                "Fault Finding",
                "Lighting",
                "Commercial",
              ].map((item) => (
                <li key={item} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>123 Spark Avenue, Tech City, 8001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+27821234567" className="hover:text-white transition-colors">082 123 4567</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@jdkelectrical.co.za" className="hover:text-white transition-colors">info@jdkelectrical.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JDK Electrical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
