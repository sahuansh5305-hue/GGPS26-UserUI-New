import { Calendar, Clock, MapPin, CalendarCheck } from "lucide-react";
import chotiMataImage from "@/assets/choti-mata.jpeg";
import gotamMuniImage from "@/assets/gotam-muni.jpg";

const EventHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-maroon to-maroon-dark p-6 md:p-8 shadow-card animate-fade-in">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-saffron/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pattern opacity-5" />

      {/* Top images - vertical column */}
      <div className="absolute sm:top-20 left-6 flex flex-col items-center gap-3 sm:gap-1">
        {/* Image 1 */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold/50 shadow-lg">
          <img
            src="/images/badimataji.jpg"
            alt="माता"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold/50 shadow-lg">
          <img
            src="/images/chotimataji.jpeg"
            alt="माता"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute sm:top-20 right-6 w-20 h-32 md:w-24 md:h-32 rounded-lg overflow-hidden -mt-3">
        <img
          src="/images/gautamuni.png"
          alt="गौतम मुनि"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mt-28 sm:-top-16 z-10 text-center space-y-4">
        {/* Main title */}
        <div className="space-y-2">
          <p className="text-gold text-base md:text-lg font-medium animate-fade-in animation-delay-100">
            || श्री गणेशाय नमः ||
          </p>
          <p className="text-saffron text-sm md:text-base font-medium animate-fade-in animation-delay-150">
            ॥ ॐ तस्मैः नमः गुरु गौतमाय ॥
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary-foreground leading-relaxed animate-fade-in animation-delay-200">
            देवास जिला, गुर्जर गौड ब्राह्मण समाज द्वारा आयोजित
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gold animate-fade-in animation-delay-300">
            अखिल भारतीय पाँचवा निःशुल्क युवक-युवती परिचय सम्मेलन 2026
          </h2>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <div className="text-gold text-xl">✦</div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Event details - reduced height */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mt-4 animate-fade-in animation-delay-500">
          <div className="flex items-center justify-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gold/20 hover:border-gold/40 transition-colors">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="text-secondary-foreground/70 text-xs">दिनांक</p>
              <p className="text-secondary-foreground font-semibold text-xs md:text-sm">
                23-03-2026 (रविवार)
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gold/20 hover:border-gold/40 transition-colors">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="text-secondary-foreground/70 text-xs">समय</p>
              <p className="text-secondary-foreground font-semibold text-xs md:text-sm">
                सुबह 9 बजे
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gold/20 hover:border-gold/40 transition-colors">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="text-secondary-foreground/70 text-xs">स्थान</p>
              <p className="text-secondary-foreground font-semibold text-xs md:text-sm">
                देवास
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gold/20 hover:border-gold/40 transition-colors">
            <CalendarCheck className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
            <div className="text-left">
              <p className="text-secondary-foreground/70 text-xs">अंतिम तिथि</p>
              <p className="text-secondary-foreground font-semibold text-xs md:text-sm">
                28-02-2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
