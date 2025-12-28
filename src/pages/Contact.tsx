import Navbar from "@/components/Navbar";
import { Phone, Mail, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-gold/10 sparkle-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gold/20">
          <h1 className="text-4xl md:text-5xl font-display text-primary text-center mb-8">
            संपर्क करें
          </h1>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-primary/5 rounded-xl p-6 border border-gold/10 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-display text-primary mb-2">KodeCrown Technologies</h3>
              <p className="text-foreground/70">ईमेल: info@kodecrown.com</p>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 border border-gold/10 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-display text-primary mb-2">डाउनलोड करें</h3>
              <p className="text-foreground/70">Google Play Store</p>
            </div>
          </div>

          {/* Support Contact */}
          <div className="bg-primary/5 rounded-xl p-6 border border-gold/10 mb-12">
            <h3 className="text-xl font-display text-primary text-center mb-4">सहायता के लिए संपर्क करें</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-foreground/70">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span>support@gautamsetu.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>+91-9753309166</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
