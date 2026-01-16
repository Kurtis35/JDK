import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  Users, 
  Wrench, 
  Lightbulb, 
  Activity, 
  Settings, 
  Home as HomeIcon, 
  Building2 
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Installations",
      description: "Complete electrical installations for new homes, renovations, and extensions. Wiring, outlets, switches, and more.",
      icon: Wrench,
      slug: "installations"
    },
    {
      title: "Fault Finding",
      description: "Expert troubleshooting to identify and fix electrical faults quickly and safely before they become major hazards.",
      icon: Activity,
      slug: "fault-finding"
    },
    {
      title: "DB Boards",
      description: "Distribution board upgrades, rewiring, and safety compliance checks to ensure your power supply is stable.",
      icon: Settings,
      slug: "db-boards"
    },
    {
      title: "Lighting",
      description: "Modern LED lighting solutions, security lighting, and automated lighting systems for efficiency and aesthetics.",
      icon: Lightbulb,
      slug: "lighting"
    },
    {
      title: "Maintenance",
      description: "Scheduled maintenance and compliance certificates (COC) for residential and commercial properties.",
      icon: ShieldCheck,
      slug: "maintenance"
    },
    {
      title: "Commercial",
      description: "Reliable electrical services for offices, retail spaces, and industrial facilities with minimal downtime.",
      icon: Building2,
      slug: "commercial"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs mb-8 tracking-[0.2em] uppercase">
                Premier Electrical Services
              </span>
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
                Reliable Work <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                  You Can Trust
                </span>
              </h1>
              <p className="text-xl text-muted-foreground/80 mb-12 leading-relaxed max-w-2xl font-light">
                JDK Electrical delivers safe, professional installations and maintenance. 
                Experience premium workmanship that powers your world with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:+27821234567" className="group">
                  <Button size="lg" className="cta-glow w-full sm:w-auto text-lg h-16 px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                    <Zap className="mr-3 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
                    Call Now
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-16 px-10 rounded-full border-white/10 hover:bg-white/5 text-white backdrop-blur-sm transition-all duration-300">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              From small repairs to major installations, we deliver excellence in every connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose JDK Electrical?</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Experienced Professionals",
                    text: "Years of hands-on experience in domestic and commercial electrical systems.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Safety First",
                    text: "Strict adherence to SANS regulations and safety standards on every job.",
                    icon: Zap
                  },
                  {
                    title: "Clean Workmanship",
                    text: "We respect your property and leave our workspace clean and tidy.",
                    icon: HomeIcon
                  },
                  {
                    title: "Client Satisfaction",
                    text: "Our reputation is built on reliability, transparency, and quality results.",
                    icon: Users
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract visual representation instead of stock photo */}
              <div className="aspect-square rounded-3xl bg-secondary/30 border border-white/5 p-8 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-50">
                   <div className="bg-primary/20 rounded-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                   <div className="bg-white/5 rounded-2xl" />
                   <div className="bg-white/5 rounded-2xl" />
                   <div className="bg-accent/20 rounded-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center bg-background/90 backdrop-blur-xl p-8 rounded-2xl border border-primary/30 shadow-2xl">
                      <div className="text-5xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Years Experience</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-primary/10 border-y border-primary/20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-6 text-red-400 border border-red-500/20">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-semibold text-sm uppercase tracking-wide">Emergency Services Available</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Electrical Emergency?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Don't risk your safety. If you have a power failure, sparking outlets, or electrical danger, call us immediately.
          </p>
          <a href="tel:+27821234567">
            <Button size="lg" variant="destructive" className="h-16 px-8 text-lg rounded-xl shadow-lg shadow-red-500/20 animate-pulse">
              Call Emergency Line: 082 123 4567
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
