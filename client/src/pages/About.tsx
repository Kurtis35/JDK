import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, ThumbsUp, UserCheck, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary/5 border-b border-white/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your local, trusted electrical partners committed to excellence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <h2 className="text-primary font-bold">Who We Are</h2>
              <p>
                JDK Electrical is a premier electrical service provider dedicated to delivering top-tier workmanship and exceptional customer service. Founded on the principles of integrity, safety, and reliability, we have grown to become a trusted name in the industry.
              </p>
              <p>
                We understand that inviting a tradesman into your home or business requires trust. That's why we prioritize clear communication, transparent pricing, and respectful conduct on every site. Whether it's a simple socket repair or a complex commercial installation, we treat every job with the same level of importance.
              </p>
              
              <h3 className="text-primary font-bold mt-12">Our Mission</h3>
              <p>
                Our mission is simple: to provide safe, compliant, and efficient electrical solutions that give our clients peace of mind. We strive to be the electricians you recommend to your friends and family without hesitation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card p-8 rounded-2xl border border-white/5">
                <ThumbsUp className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand by our work. All our installations adhere to SANS 10142-1 standards and come with a workmanship guarantee.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-white/5">
                <UserCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Qualified Team</h3>
                <p className="text-muted-foreground">
                  Our electricians are fully qualified, licensed, and continuously trained on the latest technologies and safety protocols.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-white/5">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                <p className="text-muted-foreground">
                  We know electrical issues can't wait. We strive for prompt response times and efficient problem solving.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-white/5">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
                <p className="text-muted-foreground">
                  For your peace of mind, we carry comprehensive public liability insurance covering all our operations.
                </p>
              </div>
            </div>

            <div className="text-center bg-secondary/20 rounded-3xl p-12 border border-white/5">
              <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let us handle your electrical needs with the professionalism you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 rounded-xl text-lg">
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl text-lg border-white/20">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
