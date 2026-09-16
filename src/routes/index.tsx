import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Flower2, Heart, Sparkles } from "lucide-react";
import { AanganBrand } from "@/components/aangan-brand";
import { GlassButton, GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import weddingHero from "@/assets/aangan-wedding-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "आँगन — सच्चे रिश्तों की नई शुरुआत" },
      { name: "description", content: "अपनापन, भरोसा और परिवार से शुरू होने वाले खूबसूरत रिश्तों के लिए आँगन।" },
      { property: "og:title", content: "आँगन — सच्चे रिश्तों की नई शुरुआत" },
      { property: "og:description", content: "अपनापन, भरोसा और परिवार से शुरू होने वाले खूबसूरत रिश्तों के लिए आँगन।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary text-ivory">
      <GlassFilter />
      <img
        src={weddingHero}
        alt="सजे हुए आँगन में मुस्कुराता नवविवाहित भारतीय जोड़ा"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-festive-stripe" />

      <header className="relative z-40 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <AanganBrand light />
        <nav aria-label="मुख्य नेविगेशन" className="flex items-center gap-3 text-sm font-semibold sm:gap-6">
          <Link to="/login" className="story-link hidden text-ivory/90 sm:inline-flex">प्रवेश</Link>
          <Link to="/signup" className="rounded-full border border-ivory/40 bg-ivory/10 px-4 py-2.5 text-ivory backdrop-blur-md transition-colors hover:bg-ivory/20 sm:px-5">नया खाता</Link>
        </nav>
      </header>

      <section className="relative z-30 mx-auto flex min-h-[calc(100vh-104px)] w-full max-w-7xl items-center px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="mb-8 flex items-center gap-3 text-sm font-medium text-marigold sm:text-base">
            <span className="h-px w-10 bg-marigold" />
            <span>रिश्तों की नई शुरुआत, अपने आँगन से।</span>
          </div>
          <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[1.13] sm:text-6xl lg:text-7xl">
            रिश्ता वही, जो दिल को अपना सा लगे।
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/85 sm:text-xl">
            एक ऐसा रिश्ता खोजिए, जिसकी शुरुआत अपनापन, भरोसा और परिवार से हो।
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <GlassButton
              onClick={() => void navigate({ to: "/signup" })}
              className="!rounded-full !bg-vermilion !px-7 !py-4 text-ivory shadow-festive hover:!px-8 hover:!py-4"
            >
              <span className="flex items-center gap-3">
                अपना रिश्ता शुरू करें <ArrowRight className="size-5" aria-hidden="true" />
              </span>
            </GlassButton>
            <GlassButton
              onClick={() => void navigate({ to: "/login" })}
              className="!rounded-full !px-6 !py-4 text-ivory hover:!px-7 hover:!py-4"
            >
              पहले से जुड़े हैं? प्रवेश करें
            </GlassButton>
          </div>

          <GlassEffect className="mt-10 w-full max-w-lg cursor-default !rounded-2xl border border-ivory/20 px-5 py-4 text-ivory sm:px-6">
            <div className="grid w-full grid-cols-3 gap-3 text-center text-xs sm:text-sm">
              <div className="flex flex-col items-center gap-2"><Heart className="size-5 text-marigold" aria-hidden="true" /><span>दिल से चुने रिश्ते</span></div>
              <div className="flex flex-col items-center gap-2 border-x border-ivory/20"><Sparkles className="size-5 text-marigold" aria-hidden="true" /><span>सरल और सुंदर</span></div>
              <div className="flex flex-col items-center gap-2"><Flower2 className="size-5 text-marigold" aria-hidden="true" /><span>परिवार का भरोसा</span></div>
            </div>
          </GlassEffect>
        </div>
      </section>
    </main>
  );
}