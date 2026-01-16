import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Wrench, 
  ShieldCheck, 
  Settings, 
  Activity, 
  Lightbulb, 
  Building2, 
  CheckCircle2 
} from "lucide-react";

const servicesList = [
  {
    title: "Installations",
    description: "Whether you're building a new home or extending an existing one, our comprehensive installation services ensure your electrical system is safe, compliant, and efficient.",
    icon: Wrench,
    features: ["New home wiring", "Renovation rewiring", "Socket outlets & switches", "Ceiling fans", "Appliance connections"],
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Fault Finding & Repairs",
    description: "Electrical faults can be dangerous and frustrating. We use advanced diagnostic equipment to trace faults accurately and repair them efficiently.",
    icon: Activity,
    features: ["Tripping circuit breakers", "Earth leakage faults", "Burnt connections", "Power failures", "Surge damage repairs"],
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "DB Board Upgrades",
    description: "Your distribution board is the heart of your electrical system. We upgrade old fuse boards to modern circuit breaker panels for enhanced safety.",
    icon: Settings,
    features: ["DB board rewiring", "Circuit labeling", "Safety switch installation", "Surge protection", "Load balancing"],
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Lighting Solutions",
    description: "Transform your space with our lighting solutions. We specialize in energy-efficient LED upgrades and aesthetic lighting designs.",
    icon: Lightbulb,
    features: ["LED downlights", "Security floodlights", "Garden lighting", "Motion sensors", "Smart lighting controls"],
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    title: "Maintenance & COCs",
    description: "Regular maintenance prevents costly breakdowns. We also issue Certificates of Compliance (COC) for property sales and insurance purposes.",
    icon: ShieldCheck,
    features: ["Electrical inspections", "COC certification", "Preventative maintenance", "Safety audits", "Compliance testing"],
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Commercial Services",
    description: "We understand that downtime costs money. Our commercial services prioritize speed and reliability to keep your business running.",
    icon: Building2,
    features: ["Office fit-outs", "3-phase power", "Emergency lighting", "Data cabling", "Backup power solutions"],
    color: "bg-purple-500/10 text-purple-500"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary/5 border-b border-white/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electrical solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      <div className="container-custom py-20 space-y-24">
        {servicesList.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
            
            {/* Visual Side */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video lg:aspect-square rounded-3xl bg-secondary/20 border border-white/5 relative overflow-hidden p-8 flex items-center justify-center group">
                <div className={`absolute inset-0 opacity-20 ${service.color.replace('text-', 'bg-').replace('/10', '/5')}`} />
                <service.icon className={`w-32 h-32 ${service.color.split(' ')[1]} opacity-50 group-hover:scale-110 transition-transform duration-500`} />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact">
                <Button className="rounded-xl h-12 px-6">
                  Book This Service
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-background">Need something specific?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-medium text-background">
            We handle custom electrical projects of all sizes. Contact us to discuss your requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-xl bg-background text-primary hover:bg-white border-0 shadow-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
