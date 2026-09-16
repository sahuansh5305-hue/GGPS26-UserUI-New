import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, Flower2 } from "lucide-react";
import { AanganBrand } from "@/components/aangan-brand";
import { GlassButton, GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "नया खाता — आँगन" },
      { name: "description", content: "आँगन से जुड़कर अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।" },
      { property: "og:title", content: "नया खाता — आँगन" },
      { property: "og:description", content: "आँगन से जुड़कर अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

const relationChoices = ["मेरे लिए", "बेटे के लिए", "बेटी के लिए", "भाई के लिए", "बहन के लिए", "किसी और के लिए"];

function SignupPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("मेरे लिए");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) nextErrors.name = "कृपया अपना पूरा नाम लिखें।";
    if (!/^\d{10}$/.test(phone)) nextErrors.phone = "कृपया १० अंकों का मोबाइल नंबर लिखें।";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    void navigate({ to: "/registration" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-signup-pattern px-5 py-6 sm:px-8 sm:py-8">
      <GlassFilter />
      <div className="pointer-events-none absolute left-[-4rem] top-40 size-52 rounded-full border-[34px] border-vermilion/8" />
      <div className="pointer-events-none absolute bottom-[-5rem] right-[-3rem] text-marigold/15"><Flower2 className="size-64" strokeWidth={0.7} /></div>

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between">
        <AanganBrand />
        <Link to="/login" className="text-sm font-bold text-primary transition-colors hover:text-vermilion">प्रवेश</Link>
      </header>

      <section className="relative z-10 mx-auto flex max-w-6xl justify-center pb-10 pt-12 sm:pt-16">
        <GlassEffect className="w-full max-w-3xl cursor-default !rounded-2xl border border-background/70 bg-background/35 p-5 text-primary shadow-soft sm:p-9 lg:p-12">
          <div className="w-full">
            <div className="mb-7 flex items-center gap-3 text-sm font-bold text-vermilion">
              <span className="grid size-8 place-items-center rounded-full bg-vermilion text-ivory">१</span>
              <span>आपकी शुरुआत</span>
              <span className="h-px flex-1 bg-primary/10" />
            </div>
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">चलिए, एक नई शुरुआत करते हैं</h1>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">आँगन से जुड़िए और अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।</p>

            <form className="mt-9 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="signup-name" className="mb-2 block text-sm font-bold">नाम</label>
                  <input id="signup-name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="अपना पूरा नाम लिखें" className="h-14 w-full rounded-xl border border-primary/15 bg-background/70 px-4 outline-none transition focus:border-vermilion focus:ring-2 focus:ring-vermilion/15" />
                  {errors.name ? <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="signup-phone" className="mb-2 block text-sm font-bold">मोबाइल नंबर</label>
                  <div className="flex h-14 overflow-hidden rounded-xl border border-primary/15 bg-background/70 focus-within:border-vermilion focus-within:ring-2 focus-within:ring-vermilion/15">
                    <span className="grid w-16 shrink-0 place-items-center border-r border-primary/10 font-semibold">+९१</span>
                    <input id="signup-phone" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))} inputMode="numeric" autoComplete="tel" placeholder="अपना मोबाइल नंबर लिखें" className="min-w-0 flex-1 bg-transparent px-4 outline-none placeholder:text-muted-foreground/75" />
                  </div>
                  {errors.phone ? <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">{errors.phone}</p> : null}
                </div>
              </div>

              <fieldset>
                <legend className="mb-3 text-sm font-bold">रिश्ता किसके लिए है?</legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {relationChoices.map((choice) => {
                    const isSelected = choice === selected;
                    return (
                      <GlassEffect
                        key={choice}
                        onClick={() => setSelected(choice)}
                        className={`min-h-14 items-center justify-center !rounded-xl border px-3 py-3 text-center text-sm ${isSelected ? "border-vermilion bg-vermilion/15 text-primary" : "border-primary/10 bg-background/20 text-muted-foreground"}`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {isSelected && <Check className="size-4 text-vermilion" strokeWidth={3} aria-hidden="true" />}
                          {choice}
                        </span>
                      </GlassEffect>
                    );
                  })}
                </div>
              </fieldset>

              <GlassButton onClick={() => handleSubmit()} className="w-full justify-center !rounded-full !bg-primary !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4">
                <span className="flex items-center gap-3">आगे बढ़ें <ArrowRight className="size-5" aria-hidden="true" /></span>
              </GlassButton>
            </form>

            <p className="mt-7 text-center text-sm text-muted-foreground">
              पहले से खाता है?{" "}
              <Link to="/login" className="font-bold text-vermilion underline decoration-vermilion/30 underline-offset-4 hover:decoration-vermilion">प्रवेश करें</Link>
            </p>
          </div>
        </GlassEffect>
      </section>
    </main>
  );
}