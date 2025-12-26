import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-gold/10 sparkle-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gold/20">
          <h1 className="text-4xl md:text-5xl font-display text-primary text-center mb-8">
            About Us
          </h1>
          
          <div className="space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
             गौतम सेतु KodeCrown Technologies की एक अभिनव पहल है। हमारा लक्ष्य समाज को तकनीक के माध्यम से जोड़ना और प्रत्येक सदस्य को अपनी क्षमताओं का पूर्ण उपयोग करने के लिए अवसर प्रदान करना है। यह मंच सभी आयु वर्ग के लोगों के लिए उपयोगी है — विद्यार्थी, नौकरी चाहने वाले, व्यवसायी, और वरिष्ठजन।
            </p>
            
            {/* <div className="border-l-4 border-gold pl-6 my-8">
              <p className="text-xl italic text-primary font-display">
                "Two souls, one heart, united in the bonds of eternal love."
              </p>
            </div>
            
            <p className="text-lg leading-relaxed">
              We invite you to be a part of this joyous celebration as two families come together to witness the sacred union blessed by divine grace.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/5 rounded-xl p-6 border border-gold/10">
                <h3 className="text-xl font-display text-primary mb-3">Our Tradition</h3>
                <p className="text-foreground/70">
                  Rooted in rich cultural heritage, our ceremony honors the sacred traditions passed down through generations.
                </p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 border border-gold/10">
                <h3 className="text-xl font-display text-primary mb-3">Our Blessings</h3>
                <p className="text-foreground/70">
                  Under the guidance of revered saints, this union is blessed with divine grace and eternal love.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
