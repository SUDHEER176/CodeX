import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const variantStyles: Record<string, string> = {
  default: "bg-[#ff5500] text-black hover:bg-[#ff6611] shadow-[0_0_15px_rgba(255,85,0,0.3)]",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-white/15 bg-black/60 hover:bg-white/10 text-white",
  secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/10",
  ghost: "hover:bg-white/5 text-slate-300 hover:text-white",
  link: "text-primary underline-offset-4 hover:underline text-[#ff5500]",
};

const sizeStyles: Record<string, string> = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-8 px-3 text-xs rounded-lg",
  lg: "h-11 px-8 text-base rounded-xl",
  icon: "h-9 w-9 p-0",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-normal transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variantStyles[variant] || variantStyles.default,
          sizeStyles[size] || sizeStyles.default,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
export default Button;
