import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { AanganBrand } from "@/components/aangan-brand";
import { GlassButton, GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import weddingCouple from "@/assets/aangan-wedding-couple.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "प्रवेश — आँगन" },
      { name: "description", content: "आँगन में अपने मोबाइल नंबर के साथ सहज प्रवेश करें।" },
      { property: "og:title", content: "प्रवेश — आँगन" },
      { property: "og:description", content: "अपने रिश्तों की नई शुरुआत वहीं से आगे बढ़ाइए।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-rosewash">
      <GlassFilter />
      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <section className="relative hidden overflow-hidden lg:block">
          <img src={weddingCouple} alt="सजे आँगन में भारतीय जोड़ा" width={1024} height={1536} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-image-wash" />
          <div className="absolute inset-x-0 top-0 z-20 p-10"><AanganBrand light /></div>
          <div className="absolute inset-x-0 bottom-0 z-20 p-10">
            <GlassEffect className="max-w-md cursor-default !rounded-2xl px-7 py-6 text-ivory">
              <div>
                <Heart className="mb-4 size-7 text-marigold" fill="currentColor" aria-hidden="true" />
                <p className="font-display text-3xl font-medium leading-snug">हर खूबसूरत रिश्ता एक सच्ची शुरुआत से बनता है।</p>
              </div>
            </GlassEffect>
          </div>
        </section>

        <section className="relative flex min-h-screen items-center justify-center px-5 py-24 sm:px-10">
          <div className="absolute left-5 top-6 lg:hidden"><AanganBrand /></div>
          <div className="pointer-events-none absolute right-[-4rem] top-16 size-44 rounded-full border-[28px] border-marigold/15" />
          <div className="w-full max-w-md animate-fade-in">
            <p className="mb-4 text-sm font-bold text-vermilion">आँगन में प्रवेश</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">वापसी पर स्वागत है</h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">अपने रिश्तों की नई शुरुआत वहीं से आगे बढ़ाइए।</p>

            <form className="mt-10" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="login-phone" className="mb-2 block text-sm font-bold text-primary">मोबाइल नंबर</label>
              <div className="flex h-14 overflow-hidden rounded-xl border border-primary/15 bg-background/80 shadow-soft backdrop-blur-md focus-within:border-vermilion focus-within:ring-2 focus-within:ring-vermilion/15">
                <span className="grid w-16 shrink-0 place-items-center border-r border-primary/10 font-semibold text-primary">+९१</span>
                <input id="login-phone" inputMode="numeric" autoComplete="tel" placeholder="अपना मोबाइल नंबर लिखें" className="min-w-0 flex-1 bg-transparent px-4 text-primary outline-none placeholder:text-muted-foreground/75" />
              </div>
              <GlassButton className="mt-6 w-full justify-center !rounded-full !bg-primary !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4">
                <span className="flex items-center gap-3">प्रवेश करें <ArrowRight className="size-5" aria-hidden="true" /></span>
              </GlassButton>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              अभी तक आँगन से नहीं जुड़े?{" "}
              <Link to="/signup" className="font-bold text-vermilion underline decoration-vermilion/30 underline-offset-4 hover:decoration-vermilion">नया खाता बनाएं</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}