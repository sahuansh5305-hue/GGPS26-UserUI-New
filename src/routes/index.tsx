import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Flower2, Heart, Sparkles } from "lucide-react";
import {
  GlassButton,
  GlassEffect,
  GlassFilter,
} from "@/components/ui/liquid-glass";

import weddingHero from "@/assets/aangan-wedding-hero.jpg";
import gurjarGaudLogo from "@/assets/ChatGPT Image Sep 16, 2026, 07_54_00 PM.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "विवाह योग्य युवक-युवती परिचय सम्मेलन 2026 | श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर",
      },
      {
        name: "description",
        content:
          "श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर द्वारा आयोजित विवाह योग्य युवक-युवती परिचय सम्मेलन 2026।",
      },
      {
        property: "og:title",
        content: "विवाह योग्य युवक-युवती परिचय सम्मेलन 2026",
      },
      {
        property: "og:description",
        content: "श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function Index() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary text-ivory">

      {/* =====================================================
          FILTER
      ====================================================== */}
      <GlassFilter />

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <img
        src={weddingHero}
        alt="सजे हुए आँगन में मुस्कुराता नवविवाहित भारतीय जोड़ा"
        width={1920}
        height={1280}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[65%_center]
        "
      />

      {/* =====================================================
          OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Left dark gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/50
          to-black/10
        "
      />

      {/* =====================================================
          FESTIVE STRIPE
      ====================================================== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-festive-stripe" />

      {/* =====================================================
          HEADER / TOP AREA
      ====================================================== */}
      <header
        className="
          relative
          z-40
          mx-auto
          w-full
          max-w-7xl
          px-5
          pt-6
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            TOP ROW
        ================================================== */}
        <div
          className="
            relative
            min-h-[150px]
            w-full
          "
        >

          {/* =================================================
              LOGO - TOP LEFT
          ================================================== */}
          <div
            className="
              absolute
              left-0
              top-0
            "
          >
            <div
              className="
                inline-flex
                rounded-[26px]
                border
                border-white/20
                bg-black/20
                p-2
                shadow-2xl
                backdrop-blur-md
              "
            >
              <img
                src={gurjarGaudLogo}
                alt="श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर"
                className="
                  h-28
                  w-28
                  rounded-[20px]
                  object-contain
                  sm:h-32
                  sm:w-32
                  lg:h-36
                  lg:w-36
                "
              />
            </div>
          </div>

          {/* =================================================
              CENTER INFORMATION
          ================================================== */}
          <div
            className="
              mx-auto
              flex
              max-w-2xl
              flex-col
              items-center
              text-center
              sm:pt-1
            "
          >

            {/* Mantra */}
            <div
              className="
                font-display
                text-sm
                font-semibold
                tracking-wide
                text-marigold
                drop-shadow-lg
                sm:text-base
                lg:text-lg
              "
            >
              ॥ ॐ तस्मै नमः गुरुगौतमायः ॥
            </div>

            {/* Organization */}
            <div className="mt-2">
              <h1
                className="
                  font-display
                  text-xl
                  font-bold
                  leading-tight
                  text-marigold
                  drop-shadow-lg
                  sm:text-2xl
                  lg:text-[30px]
                "
              >
                श्री गुर्जर गौड़ ब्राह्मण नगर सभा (रजि.), इन्दौर
              </h1>

        
            </div>

            {/* Event */}
            <div
              className="
                mt-2
                border-t
                border-marigold/30
                pt-2
              "
            >
              <h2
                className="
                  font-display
                  text-lg
                  font-bold
                  leading-tight
                  text-ivory
                  drop-shadow-lg
                  sm:text-xl
                  lg:text-2xl
                "
              >
                विवाह योग्य युवक-युवती परिचय सम्मेलन - 2026
              </h2>
            </div>

          </div>

          {/* =================================================
              NAVIGATION - TOP RIGHT
          ================================================== */}
          <nav
            aria-label="मुख्य नेविगेशन"
            className="
              absolute
              right-0
              top-0
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              sm:gap-3
            "
          >

            {/* Login */}
            <Link
              to="/login"
              className="
                rounded-full
                px-4
                py-2.5
                text-ivory/90
                transition
                hover:bg-ivory/10
                hover:text-ivory
              "
            >
              प्रवेश
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="
                rounded-full
                border
                border-ivory/30
                bg-black/20
                px-5
                py-2.5
                text-ivory
                shadow-lg
                backdrop-blur-md
                transition
                hover:border-ivory/50
                hover:bg-ivory/15
              "
            >
              नया खाता
            </Link>

          </nav>

        </div>
      </header>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <section
        className="
          relative
          z-30
          mx-auto
          flex
          min-h-[calc(100vh-190px)]
          w-full
          max-w-7xl
          items-start
          px-5
          pb-12
          pt-5
          sm:px-8
          sm:pt-7
          lg:px-12
          lg:pt-8
        "
      >

        {/* Hero content starts below header */}
        <div
          className="
            w-full
            max-w-3xl
            animate-fade-in
          "
        >

          {/* =================================================
              TAGLINE
          ================================================== */}
          <div
            className="
              mb-5
              flex
              items-center
              gap-3
              text-sm
              font-medium
              text-marigold
              sm:text-base
            "
          >
            <span className="h-px w-12 shrink-0 bg-marigold" />

            <span>
              परिचय से रिश्तों तक, समाज के साथ हर कदम
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <h3
            className="
              max-w-2xl
              font-display
              text-[42px]
              font-semibold
              leading-[1.1]
              tracking-tight
              text-ivory
              drop-shadow-xl
              sm:text-5xl
              lg:text-[64px]
            "
          >
         परिचय सेतु
          </h3>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-ivory/80
              sm:text-lg
            "
          >
            श्री गुर्जर गौड़ ब्राह्मण समाज
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}
          <div
            className="
              mt-7
              flex
              flex-col
              items-start
              gap-3
              sm:flex-row
              sm:items-center
            "
          >

            {/* Primary */}
            <GlassButton
              onClick={() => void navigate({ to: "/signup" })}
              className="
                !rounded-full
                !bg-vermilion
                !px-7
                !py-3.5
                text-ivory
                shadow-festive
                transition-transform
                hover:scale-[1.02]
              "
            >
              <span className="flex items-center gap-3">
                अपना रिश्ता शुरू करें

                <ArrowRight
                  className="size-5"
                  aria-hidden="true"
                />
              </span>
            </GlassButton>

            {/* Secondary */}
            <GlassButton
              onClick={() => void navigate({ to: "/login" })}
              className="
                !rounded-full
                !border
                !border-ivory/30
                !bg-black/20
                !px-6
                !py-3.5
                text-ivory
                backdrop-blur-md
                transition
                hover:!bg-ivory/15
              "
            >
              पहले से जुड़े हैं? प्रवेश करें
            </GlassButton>

          </div>

          {/* =================================================
              FEATURES
          ================================================== */}
          <GlassEffect
            className="
              mt-7
              w-full
              max-w-xl
              cursor-default
              !rounded-2xl
              border
              border-ivory/15
              bg-black/10
              px-5
              py-3.5
              text-ivory
              backdrop-blur-md
              sm:px-6
            "
          >

            <div
              className="
                grid
                w-full
                grid-cols-3
                gap-3
                text-center
                text-xs
                sm:text-sm
              "
            >

              {/* Feature 1 */}
              <div className="flex flex-col items-center gap-1.5">
                <Heart
                  className="size-5 text-marigold"
                  aria-hidden="true"
                />

                <span>
                  दिल से चुने रिश्ते
                </span>
              </div>

              {/* Feature 2 */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-1.5
                  border-x
                  border-ivory/20
                "
              >
                <Sparkles
                  className="size-5 text-marigold"
                  aria-hidden="true"
                />

                <span>
                  सरल और सुंदर
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center gap-1.5">
                <Flower2
                  className="size-5 text-marigold"
                  aria-hidden="true"
                />

                <span>
                  परिवार का भरोसा
                </span>
              </div>

            </div>

          </GlassEffect>

        </div>
      </section>
    </main>
  );
}