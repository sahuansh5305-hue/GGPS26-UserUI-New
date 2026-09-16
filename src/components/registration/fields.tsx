import { useMemo, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { GlassEffect } from "@/components/ui/liquid-glass";

const inputBase =
  "h-14 w-full rounded-xl border border-primary/15 bg-background/70 px-4 text-primary outline-none transition placeholder:text-muted-foreground/75 focus:border-vermilion focus:ring-2 focus:ring-vermilion/15";

export function FieldShell({
  label,
  htmlFor,
  error,
  hint,
  children,
  className = "",
}: {
  label: string;
  htmlFor?: string;
  error?: string | undefined;
  hint?: string | undefined;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-primary">
        {label}
      </label>
      {children}
      {hint && !error ? <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  hint,
  type = "text",
  inputMode,
  maxLength,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string | undefined;
  hint?: string | undefined;
  type?: string;
  inputMode?: "numeric" | "tel" | "text";
  maxLength?: number;
  className?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={id} error={error} hint={hint} className={className ?? ""}>
      <input
        id={id}
        type={type}
        value={value}
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={inputBase}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string | undefined;
}) {
  return (
    <FieldShell label={label} htmlFor={id} error={error}>
      <textarea
        id={id}
        value={value}
        rows={4}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-primary/15 bg-background/70 p-4 text-primary outline-none transition placeholder:text-muted-foreground/75 focus:border-vermilion focus:ring-2 focus:ring-vermilion/15"
      />
    </FieldShell>
  );
}

export function AmountField({
  id,
  label,
  value,
  onChange,
  hidden,
  onHiddenChange,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hidden: boolean;
  onHiddenChange: (hidden: boolean) => void;
  error?: string | undefined;
}) {
  return (
    <FieldShell label={label} htmlFor={id} error={error}>
      <div className="flex h-14 overflow-hidden rounded-xl border border-primary/15 bg-background/70 focus-within:border-vermilion focus-within:ring-2 focus-within:ring-vermilion/15">
        <span className="grid w-14 shrink-0 place-items-center border-r border-primary/10 text-lg font-semibold text-primary">
          ₹
        </span>
        <input
          id={id}
          value={hidden ? "" : value}
          disabled={hidden}
          inputMode="numeric"
          placeholder="मासिक आय लिखें"
          onChange={(event) => onChange(event.target.value.replace(/\D/g, ""))}
          className="min-w-0 flex-1 bg-transparent px-4 text-primary outline-none placeholder:text-muted-foreground/75 disabled:opacity-50"
        />
        <span className="hidden shrink-0 items-center pr-4 text-sm text-muted-foreground sm:flex">
          प्रति माह
        </span>
      </div>
      <label className="mt-2.5 inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={hidden}
          onChange={(event) => onHiddenChange(event.target.checked)}
          className="size-4 accent-[var(--vermilion)]"
        />
        बताना नहीं चाहते
      </label>
    </FieldShell>
  );
}

export function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  error,
  columns = "grid-cols-2 sm:grid-cols-3",
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  columns?: string;
}) {
  return (
    <fieldset>
      <legend className="mb-2.5 text-sm font-bold text-primary">{label}</legend>
      <div className={`grid gap-3 ${columns}`}>
        {options.map((option) => {
          const selected = option === value;
          return (
            <GlassEffect
              key={option}
              onClick={() => onChange(option)}
              className={`min-h-13 items-center justify-center !rounded-xl border px-3 py-3 text-center text-sm ${
                selected
                  ? "border-vermilion bg-vermilion/15 text-primary"
                  : "border-primary/10 bg-background/20 text-muted-foreground"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                {selected ? <Check className="size-4 text-vermilion" strokeWidth={3} aria-hidden="true" /> : null}
                {option}
              </span>
            </GlassEffect>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-xs font-semibold text-destructive">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export function SearchableSelect({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "खोजें या चुनें",
  error,
}: {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string | undefined;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (query ? options.filter((option) => option.includes(query.trim())) : options),
    [options, query],
  );

  return (
    <FieldShell label={label} htmlFor={id} error={error}>
      <div
        ref={containerRef}
        className="relative"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
        }}
      >
        <button
          id={id}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`flex ${inputBase} items-center justify-between text-left`}
        >
          <span className={value ? "text-primary" : "text-muted-foreground/75"}>{value || placeholder}</span>
          <ChevronDown className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        </button>

        {open ? (
          <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-primary/15 bg-background shadow-soft">
            <div className="flex items-center gap-2 border-b border-primary/10 px-3 py-2.5">
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="खोजिए"
                className="min-w-0 flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground/75"
              />
            </div>
            <ul className="max-h-56 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-sm text-muted-foreground">कोई परिणाम नहीं मिला</li>
              ) : (
                filtered.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(option);
                        setQuery("");
                        setOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-vermilion/10 ${
                        option === value ? "font-bold text-vermilion" : "text-primary"
                      }`}
                    >
                      {option}
                      {option === value ? <Check className="size-4" strokeWidth={3} aria-hidden="true" /> : null}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </FieldShell>
  );
}
