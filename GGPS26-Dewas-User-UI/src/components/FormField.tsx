import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

const FormField = ({ label, required, error, hint, children, className }: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-lg font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          <span className="text-gold">💡</span> {hint}
        </p>
      )}
      {error && (
        <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
