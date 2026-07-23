import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    let baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C30D0F] cursor-pointer rounded-lg select-none";

    let variantStyles = "";
    switch (variant) {
      case "primary":
        variantStyles = "bg-[#C30D0F] text-white hover:bg-[#A30A0C] shadow-[0_4px_20px_rgba(195,13,15,0.35)] hover:shadow-[0_6px_25px_rgba(195,13,15,0.55)] active:scale-[0.98] border border-transparent";
        break;
      case "secondary":
        variantStyles = "bg-white/[0.06] text-white border border-white/[0.06] hover:bg-white/[0.1] active:scale-[0.98]";
        break;
      case "outline":
        variantStyles = "bg-transparent text-white border border-white/[0.12] hover:bg-white/[0.06] hover:border-white/[0.2] active:scale-[0.98]";
        break;
      case "ghost":
        variantStyles = "bg-transparent text-[#6b7280] hover:text-white hover:bg-white/[0.03] active:scale-[0.98]";
        break;
      case "link":
        variantStyles = "bg-transparent text-[#C30D0F] hover:text-[#A30A0C] underline underline-offset-4 p-0";
        break;
    }

    let sizeStyles = "";
    switch (size) {
      case "sm":
        sizeStyles = "px-4 py-2 text-[10px]";
        break;
      case "md":
        sizeStyles = "px-5 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs";
        break;
      case "lg":
        sizeStyles = "px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm";
        break;
    }

    if (variant === "link") {
      sizeStyles = "";
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
