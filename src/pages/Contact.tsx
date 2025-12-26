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

          {/* Privacy Policy & Terms */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="privacy" className="bg-primary/5 rounded-xl border border-gold/10 px-6">
              <AccordionTrigger className="text-xl font-display text-primary hover:no-underline">
                Privacy Policy for Gautam Setu
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-4">
                <p className="text-sm text-foreground/60">Effective Date: 15-April-2025</p>
                
                <p>Gautam Setu ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our mobile application, developed and operated under the guidance of KodeCrown Technologies.</p>
                
                <p>By using this application, you agree to the collection and use of information in accordance with this Privacy Policy.</p>

                <h4 className="font-semibold text-primary mt-4">1. Information We Collect</h4>
                <p><strong>Personal Information:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Name</li>
                  <li>Mobile number</li>
                  <li>City/Address</li>
                  <li>Date of Birth, Anniversary (for greeting features)</li>
                  <li>Professional or business details (for employers and professionals)</li>
                </ul>
                <p><strong>Usage Information:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>App usage data (e.g., sections visited, actions taken)</li>
                  <li>Device information (e.g., device type, OS)</li>
                </ul>

                <h4 className="font-semibold text-primary mt-4">2. How We Use Your Information</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Authenticate and identify registered members.</li>
                  <li>Facilitate job posting and application matching.</li>
                  <li>Display relevant information (e.g., professional directory, greetings).</li>
                  <li>Improve user experience and application functionality.</li>
                  <li>Ensure community safety and appropriate use of the app.</li>
                </ul>

                <h4 className="font-semibold text-primary mt-4">3. Sharing of Information</h4>
                <p>We do not sell or rent your personal data to third parties.</p>
                <p>Information may be shared:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>With other registered members (e.g., name and profession in the member directory).</li>
                  <li>With employers within the app, when a user applies for a job.</li>
                  <li>If required by law, or to protect our legal rights.</li>
                </ul>

                <h4 className="font-semibold text-primary mt-4">4. Data Security</h4>
                <p>We take appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or mobile networks is 100% secure.</p>

                <h4 className="font-semibold text-primary mt-4">5. Your Rights and Choices</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>You can review and update your information via your profile settings.</li>
                  <li>You can contact us to delete your account or personal data from our system.</li>
                </ul>

                <h4 className="font-semibold text-primary mt-4">6. Children's Privacy</h4>
                <p>Our application is not intended for use by individuals under the age of 13. We do not knowingly collect data from children.</p>

                <h4 className="font-semibold text-primary mt-4">7. Changes to This Privacy Policy</h4>
                <p>We may update this Privacy Policy from time to time. Any changes will be notified within the app or via the registered contact details. Continued use of the app after changes constitutes your acceptance of the updated policy.</p>

                <h4 className="font-semibold text-primary mt-4">8. Contact Us</h4>
                <p>If you have any questions or concerns about this Privacy Policy or your data, please contact:</p>
                <p><strong>KodeCrown Technologies</strong><br />
                Email: support@gautamsetu.com<br />
                Phone: +91-9753309166</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="terms" className="bg-primary/5 rounded-xl border border-gold/10 px-6">
              <AccordionTrigger className="text-xl font-display text-primary hover:no-underline">
                Terms of Service for Gautam Setu
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-4">
                <p className="text-sm text-foreground/60">Effective Date: 15-April-2025</p>
                
                <p>Welcome to Gautam Setu, a mobile application operated by KodeCrown Technologies. By using this app, you agree to the following Terms of Service. Please read them carefully.</p>

                <h4 className="font-semibold text-primary mt-4">1. Acceptance of Terms</h4>
                <p>By accessing or using the Gautam Setu app, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to any part of the terms, you must not use the app.</p>

                <h4 className="font-semibold text-primary mt-4">2. Eligibility</h4>
                <p>This application is intended for use by members of the Shri Gurjar Gaur Brahmin Samaj, specifically those registered with Gautam Setu. You must be at least 18 years of age to use the app independently.</p>

                <h4 className="font-semibold text-primary mt-4">3. User Accounts</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>You must register using a valid mobile number already registered with the Nagar Sabha.</li>
                  <li>You are responsible for maintaining the confidentiality of your account and are liable for all activities under your account.</li>
                </ul>

                <h4 className="font-semibold text-primary mt-4">4. Community Guidelines</h4>
                <p>You agree to use the application respectfully and ethically. The following is strictly prohibited:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Posting false or misleading information.</li>
                  <li>Sharing offensive, abusive, or discriminatory content.</li>
                  <li>Using the platform for purposes outside its intended community-driven objectives.</li>
                </ul>
                <p>Violation of these terms may result in suspension or termination of access.</p>

                <h4 className="font-semibold text-primary mt-4">5. Employment Module Usage</h4>
                <p>The employment section is intended to facilitate connections between community employers and job seekers. We do not guarantee job placements and are not responsible for the terms of employment between members.</p>

                <h4 className="font-semibold text-primary mt-4">6. Professional Directory and Greeting Features</h4>
                <p>Information in the directory is for internal community use only. You agree not to misuse personal or professional details of other members for commercial or unsolicited purposes.</p>

                <h4 className="font-semibold text-primary mt-4">7. Modifications and Updates</h4>
                <p>We may update or modify the application, features, or these Terms of Service at any time. Continued use of the app following changes signifies your acceptance of the revised terms.</p>

                <h4 className="font-semibold text-primary mt-4">8. Termination</h4>
                <p>We reserve the right to suspend or permanently terminate access to the app for any user found in violation of these terms or engaging in behavior that negatively impacts the community.</p>

                <h4 className="font-semibold text-primary mt-4">9. Limitation of Liability</h4>
                <p>We provide this application on an "as-is" basis. We are not liable for any direct or indirect damages arising from the use or inability to use the application, including reliance on any information shared through the app.</p>

                <h4 className="font-semibold text-primary mt-4">10. Contact Information</h4>
                <p>If you have any questions or concerns regarding these Terms of Service, please contact:</p>
                <p><strong>KodeCrown Technologies</strong><br />
                Email: support@gautamsetu.com<br />
                Phone: +91-9753309166</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default Contact;
