import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Phone, Star, User } from "lucide-react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
  phone?: boolean;
  user?:boolean;
  star?:boolean;
}

const FormField = ({ label, required, error,phone,user,star, hint, children, className }: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex gap-1 items-center">
        {star && <Star size={16} />}
{phone && <Phone size={18} />}
{user && <User size={20} />}

      <label className="block text-lg font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      </div>
      
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
