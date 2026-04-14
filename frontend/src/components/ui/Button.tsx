import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-brand-700 text-white hover:bg-brand-800"
          : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400",
        className,
      )}
      {...props}
    />
  );
}