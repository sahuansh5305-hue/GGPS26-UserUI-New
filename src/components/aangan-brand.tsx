import { Link } from "@tanstack/react-router";
import { Flower2 } from "lucide-react";

export function AanganBrand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="परिचय सेतु के मुख्य पृष्ठ पर जाएँ"
      className={`group inline-flex items-center gap-3 ${light ? "text-ivory" : "text-primary"}`}
    >
      <span className="grid size-11 place-items-center rounded-full border border-current/35 bg-background/15 backdrop-blur-md transition-transform duration-300 group-hover:rotate-12">
        <Flower2 className="size-6" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="font-display text-3xl font-semibold leading-none">परिचय सेतु</span>
    </Link>
  );
}