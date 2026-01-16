import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary/5 border-b border-white/5">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help with all your electrical needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Whether you have a question about our services, need an emergency repair, or want to request a quote, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">Available for emergencies</p>
                    <a href="tel:+27821234567" className="text-xl font-bold text-primary hover:underline">
                      082 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">For quotes and inquiries</p>
                    <a href="mailto:info@jdkelectrical.co.za" className="text-lg text-white hover:text-primary transition-colors">
                      info@jdkelectrical.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      123 Spark Avenue, Tech City, 8001<br />
                      Serving the greater metro area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                    <div className="text-muted-foreground grid grid-cols-2 gap-x-8 gap-y-1">
                      <span>Mon - Fri:</span>
                      <span className="text-white">08:00 - 17:00</span>
                      <span>Saturday:</span>
                      <span className="text-white">09:00 - 13:00</span>
                      <span>Sunday:</span>
                      <span className="text-white">Emergency Only</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/27821234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-12 flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green-900/20"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="bg-card border border-white/5 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
