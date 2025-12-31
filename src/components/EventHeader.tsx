import { Calendar, Clock, MapPin, CalendarCheck } from "lucide-react";

const EventHeader = () => {
  return (
    <div className="relative overflow-hidden h-96 sm:h-auto rounded-2xl bg-gradient-to-br from-maroon to-maroon-dark pt-6 pr-6 pb-6 pl-10 shadow-card animate-fade-in">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-saffron/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pattern opacity-5" />

      {/* Top images - vertical column */}
      <div className="absolute left-6 flex flex-col items-center gap-1 sm:gap-1">
        {/* Image 1 */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold/50 shadow-lg">
          <img
            src="/images/badimataji.png"
            alt="माता"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold/50 shadow-lg">
          <img
            src="/images/chotimataji.png"
            alt="माता"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute  right-6 w-20 h-28 sm:h-40 md:w-24 md:max-h-36 rounded-lg overflow-hidden -mt-3">
        <img
          src="/images/gautamuni.png"
          alt="गौतम मुनि"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative top-16  sm:top-2 z-10 right-3 text-center">
        {/* Main title */}
        <div className="space-y-0.5">
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
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2 md:gap-3">

  {/* CARD */}
  <div className="
    flex items-center
    gap-1.5 sm:gap-2
    bg-secondary-foreground/10 backdrop-blur-sm
    rounded-md sm:rounded-lg
    p-1.5 sm:p-2 md:p-3
    border border-gold/20 hover:border-gold/40 transition-all
  ">
    {/* ICON */}
    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />

    {/* CONTENT */}
    <div className="
      flex items-center gap-1
      sm:flex-col sm:items-start sm:gap-0.5
    ">
      {/* LABEL */}
      <span className=" hidden sm:block
        text-secondary-foreground/70
        text-[10px] sm:text-xs
        whitespace-nowrap
      ">
        कार्यकम दिनांक
      </span>

      {/* VALUE */}
      <span className="
        text-secondary-foreground font-semibold
        text-[11px] sm:text-xs md:text-sm
        whitespace-nowrap
      ">
        29 मार्च 2026 (रविवार)
      </span>
    </div>
  </div>

  {/* TIME */}
  <div className="flex items-center gap-1.5 sm:gap-2 bg-secondary-foreground/10 backdrop-blur-sm
                  rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 border border-gold/20">
    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold" />
    <div className="flex items-center gap-1 sm:flex-col sm:items-start">
      <span className="text-secondary-foreground/70 text-[10px] sm:text-xs whitespace-nowrap">
        समय
      </span>
      <span className="text-secondary-foreground font-semibold text-[11px] sm:text-xs md:text-sm whitespace-nowrap">
        सुबह 9 बजे
      </span>
    </div>
  </div>

  {/* LOCATION */}
  <div className="flex items-center gap-1.5 sm:gap-2 bg-secondary-foreground/10 backdrop-blur-sm
                  rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 border border-gold/20">
    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold" />
    <div className="flex items-center gap-1 sm:flex-col sm:items-start">
      <span className="text-secondary-foreground/70 text-[10px] sm:text-xs whitespace-nowrap">
        स्थान
      </span>
      <span className="text-secondary-foreground font-semibold text-[11px] sm:text-xs md:text-sm whitespace-nowrap">
        देवास
      </span>
    </div>
  </div>

  {/* DEADLINE */}
  <div className="flex items-center gap-1.5 sm:gap-2 bg-secondary-foreground/10 backdrop-blur-sm
                  rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 border border-gold/20">
    <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold" />
    <div className="flex items-center gap-1 sm:flex-col sm:items-start">
      <span className="text-secondary-foreground/70 text-[10px] sm:text-xs whitespace-nowrap">
    <span className="sm:hidden"> पंजीकरण की</span> अंतिम तिथि
      </span>
      <span className="text-secondary-foreground font-semibold text-[11px] sm:text-xs md:text-sm whitespace-nowrap">
        28 फरवरी 2026
      </span>
    </div>
  </div>

</div>


      </div>
    </div>
  );
};

export default EventHeader;

