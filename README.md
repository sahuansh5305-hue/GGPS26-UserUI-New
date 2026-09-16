# Aangan Matrimony

Create a premium Hindi Indian matrimonial website named "आँगन" (Aangan) using the provided Liquid Glass component and styling.

IMPORTANT SCOPE:
Create ONLY these 3 pages:
1. Landing Page (route: /)
2. Login / प्रवेश (route: /login)
3. Sign Up / नया खाता (route: /signup)

Do NOT create a Register page, OTP backend, passwords, dashboard, chat, or any features beyond these 3 UI pages. All visible text across the entire site must be in warm, modern, natural Hindi.

COMPONENT SETUP:
1. Create `src/components/ui/liquid-glass.tsx`:
Export `GlassEffect`, `GlassDock`, `GlassButton`, `GlassFilter`, and `Component` using this exact code:

```tsx
"use client";

import React from "react";

// Types
export interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export interface DockIcon {
  src: string;
  alt: string;
  onClick?: () => void;
}

// Glass Effect Wrapper Component
export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  onClick,
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      onClick={onClick}
      className={`relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.25)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
        }}
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

// Dock Component
export const GlassDock: React.FC<{ icons: DockIcon[]; href?: string; className?: string }> = ({
  icons,
  href,
  className = "",
}) => (
  <GlassEffect
    href={href}
    className={`rounded-3xl p-3 hover:p-4 hover:rounded-4xl ${className}`}
  >
    <div className="flex items-center justify-center gap-2 rounded-3xl p-3 py-0 px-0.5 overflow-hidden">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="w-16 h-16 transition-all duration-700 hover:scale-110 cursor-pointer"
          style={{
            transformOrigin: "center center",
            transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
          }}
          onClick={icon.onClick}
        />
      ))}
    </div>
  </GlassEffect>
);

// Button Component
export const GlassButton: React.FC<{ children: React.ReactNode; href?: string; onClick?: () => void; className?: string }> = ({
  children,
  href,
  onClick,
  className = "",
}) => (
  <GlassEffect
    href={href}
    onClick={onClick}
    className={`rounded-3xl px-10 py-6 hover:px-11 hover:py-7 hover:rounded-4xl overflow-hidden ${className}`}
  >
    <div
      className="transition-all duration-700 hover:scale-95"
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
      }}
    >
      {children}
    </div>
  </GlassEffect>
);

// SVG Filter Component
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

export const Component = () => {
  const dockIcons: DockIcon[] = [
    {
      src: "https://cdn.21st.dev/assets/mirror/8d/8d2757d81dfac86570f4c8836c7406741afce9309493d7d32a5176dfb48604b6.png",
      alt: "Claude",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/a7/a7f5c3a20ee7e3979c200ae2de37dee2396d7b2eae8da7c5c294b1f308f8ebe3.png",
      alt: "Finder",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/06/06182c64d1993c122cceffea2e27a04c36a824f54b4a01163547b77f197f37bc.png",
      alt: "Chatgpt",
    },
  ];

  return (
    <div
      className="min-h-screen h-full flex items-center justify-center font-light relative overflow-hidden w-full"
      style={{
        background: `url("https://cdn.21st.dev/assets/mirror/17/171c1b4f04924b3d3783eb3181616526d023c11de774861827927a3a863094f9.jpg") center center`,
        animation: "moveBackground 60s linear infinite",
      }}
    >
      <GlassFilter />
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <GlassDock icons={dockIcons} />
      </div>
    </div>
  );
};
```

2. Create `src/components/ui/demo.tsx`:
```tsx
import { Component } from "@/components/ui/liquid-glass";

const DemoOne = () => {
  return <Component />;
};

export { DemoOne };
```

3. In `src/index.css`, add the `moveBackground` keyframe animation:
```css
@keyframes moveBackground {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 0% -1000%;
  }
}
.animate-move-bg {
  animation: moveBackground 60s linear infinite;
}
```

PAGES & CONTENT SPECIFICATION:
All visible text in Hindi, no English words.

PAGE 1 — LANDING PAGE (`/`):
- Brand: आँगन prominently displayed with tagline: "रिश्तों की नई शुरुआत, अपने आँगन से।"
- Hero heading: "रिश्ता वही, जो दिल को अपना सा लगे।"
- Supporting text: "एक ऐसा रिश्ता खोजिए, जिसकी शुरुआत अपनापन, भरोसा और परिवार से हो।"
- Primary CTA: GlassButton leading to `/signup` with text "अपना रिश्ता शुरू करें"
- Secondary CTA: GlassButton leading to `/login` with text "पहले से जुड़े हैं? प्रवेश करें"
- Incorporate `GlassFilter`, `GlassEffect`, and rich Indian wedding/matrimonial aesthetics (marigold, petals, diya motifs, elegant Indian wedding visuals, warm festive tones combined with the liquid glass effect).
- Make sure navigation works seamlessly to `/signup` and `/login`.

PAGE 2 — LOGIN / प्रवेश (`/login`):
- Heading: "वापसी पर स्वागत है"
- Supporting text: "अपने रिश्तों की नई शुरुआत वहीं से आगे बढ़ाइए।"
- Split desktop composition with authentic Indian matrimonial imagery and liquid glass cards on one side, and the authentication form on the other.
- Input field: मोबाइल नंबर with "+91" prefix and placeholder "अपना मोबाइल नंबर लिखें"
- Primary button: GlassButton with "प्रवेश करें"
- Bottom text: "अभी तक आँगन से नहीं जुड़े?" with CTA link to `/signup` ("नया खाता बनाएं")
- Brand logo linking back to `/`. UI-only (no OTP/password).

PAGE 3 — SIGN UP / नया खाता (`/signup`):
- Heading: "चलिए, एक नई शुरुआत करते हैं"
- Supporting text: "आँगन से जुड़िए और अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।"
- Field 1: नाम with placeholder "अपना पूरा नाम लिखें"
- Field 2: मोबाइल नंबर with "+91" prefix and placeholder "अपना मोबाइल नंबर लिखें"
- Field 3 / Section: "रिश्ता किसके लिए है?" with selectable GlassEffect cards:
  - मेरे लिए
  - बेटे के लिए
  - बेटी के लिए
  - भाई के लिए
  - बहन के लिए
  - किसी और के लिए
- Primary CTA button: GlassButton with "आगे बढ़ें"
- Bottom: "पहले से खाता है?" with link to `/login` ("प्रवेश करें")
- Brand logo linking back to `/`.

Ensure full responsiveness for mobile and desktop, zero horizontal scrolling, and beautiful liquid glass effects everywhere.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/53ac2c7f-c696-4ee0-b33f-7fabf37ed51d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
