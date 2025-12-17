import { Calendar, Clock, MapPin, CalendarCheck } from "lucide-react";

const EventHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-maroon to-maroon-dark p-8 md:p-10 shadow-card animate-fade-in">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-saffron/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-pattern opacity-5" />

      {/* Om symbol */}
      <div className="absolute top-4 right-4 text-gold/20 text-6xl font-bold">
        ॐ
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* TOP IMAGES ROW */}

        {/* CENTER TEXT CONTENT */}
        <div className="text-center space-y-6">
          <div className="flex w-full items-center -top-9 justify-between mb-6">
            <div className="hidden md:block">
              <img
                src="/images/mataji.png"
                alt="Left Decoration"
                className="w-20 md:w-24 lg:w-28 object-contain rounded-lg"
              />
            </div>

            <div className="">
              <span className="text-gold flex flex-col text-lg md:text-xl font-medium animate-fade-in animation-delay-100">
                || श्री गणेशाय नमः ||
              </span><br />
              <span className="text-gold text-lg md:text-xl font-medium animate-fade-in animation-delay-100">॥ ॐ तस्मैः नमः गुरु गौतमाय ॥</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground leading-relaxed animate-fade-in animation-delay-200">
                देवास जिला गुर्जर गौंड ब्राह्मण समाज <br /> <span className="text-xl  font-bold text-secondary-foreground leading-relaxed animate-fade-in animation-delay-200" > द्वारा आयोजित</span>
              </span>
              <br />
            </div>

            <div className="hidden md:block">
              <img
                src="/images/gautamuni.png"
                alt="Right Decoration"
                className="w-20 md:w-24 lg:w-28 object-contain"
              />
            </div>
          </div>
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gold animate-fade-in animation-delay-300">
            अखिल भारतीय पाँचवा निःशुल्क युवक-युवती परिचय सम्मेलन 2026
          </span>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="text-gold text-2xl">✦</div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Event details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 animate-fade-in animation-delay-500">
            <EventCard
              icon={<Calendar />}
              // label="दिनांक"
              value="23-03-2026 (रविवार)"
            />
            <EventCard icon={<Clock />} label="समय" value="सुबह 6 बजे" />
            <EventCard icon={<MapPin />} label="स्थान" value="देवास" />
            <EventCard
              icon={<CalendarCheck />}
              label="अंतिम तिथि"
              value="28-02-2026"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ icon, label, value }: any) => (
  <div className="flex items-center h-fit justify-center gap-3 bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-gold/20 hover:border-gold/40 transition-colors">
    <div className="text-gold w-6 h-6">{icon}</div>
    <div className="text-left">
      <p className="text-secondary-foreground/70 text-sm">{label}</p>
      <p className="text-secondary-foreground font-semibold">{value}</p>
    </div>
  </div>
);

export default EventHeader;
