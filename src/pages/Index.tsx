import EventHeader from "@/components/EventHeader";
import RegistrationForm from "@/components/RegistrationForm";
// import coupleBackground from "@/assets/couple-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Full screen background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: "url('/images/coupleimage.jpg')",
}}

      />
      {/* Dark overlay for better readability */}
      <div className="fixed inset-0 bg-black/50" />

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        {/* Event Header */}
        <EventHeader />

        {/* Registration Form Card */}
        <div className="mt-8 bg-card rounded-2xl shadow-card border-2 border-border p-6 md:p-8 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-gold/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-gold/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-gold/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-gold/30 rounded-br-2xl" />

          <RegistrationForm />
        </div>
        {/* Footer */}
        <footer className="mt-10 text-center text-white text-xl animate-fade-in animation-delay-500">
          <p className="flex items-center justify-center gap-2">
            <span className="text-gold">🙏</span>
            सभी का मंगल हो
            <span className="text-gold">🙏</span>
          </p>

          {/* Organizers */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pramod Vyas */}
            <div className="text-center">
              <p className="font-semibold text-white">प्रमोद व्यास</p>
              <p className="italic">( मुख्य संरक्षक अ.भ. युवक-युवती परिचय सम्मेलन)</p>
              <p className="mt-1">📞 9425494210</p>
            </div>

            {/* Suneel Sharma */}
            <div className="text-center">
              <p className="font-semibold text-white">सुनील शर्मा</p>
              <p className="italic">(संरक्षक)</p>
              <p className="mt-1">📞 8959300245</p>
            </div>
          </div>

          {/* Kamlesh Sharma */}
          <div className="mt-6 text-center">
            <p className="font-semibold text-white">कमलेश शर्मा</p>
            <p className="italic">(संयोजक)</p>
            <p className="mt-1">📞 9926929498</p>
          </div>

          <p className="mt-6">© 2026 देवास जिला गुर्जर गौंड ब्राह्मण समाज</p>
        </footer>
      </main>
 <footer className="relative z-10 bg-gradient-to-r from-saffron to-saffron-light shadow-soft">
  <div
    className="
      max-w-7xl mx-auto px-4 py-4
      text-xs sm:text-sm font-semibold text-muted-foreground
      flex flex-col items-center gap-2
      sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-2
      text-center
    "
  >
    <span className="text-maroon">
      Powered By:
      <span className="ml-1 font-bold text-maroon">
        KodeCrown Technologies
      </span>
    </span>

    <span className="hidden sm:inline">|</span>

    <a
      href="https://kodecrown.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-maroon hover:underline break-all"
    >
      www.kodecrown.com
    </a>

    <span className="hidden sm:inline">|</span>

    <a
      href="mailto:business@kodecrown.com"
      className="hover:underline  text-maroon break-all"
    >
      business@kodecrown.com
    </a>

    <span className="hidden sm:inline">|</span>

    <span className="break-all  text-maroon">
      +91-9753309166 (WhatsApp Only)
    </span>
  </div>
</footer>

    </div>
  );
};

export default Index;
