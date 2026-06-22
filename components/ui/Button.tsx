import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    let baseStyles = "inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer";
    
    let variantStyles = "";
    switch (variant) {
      case "primary":
        variantStyles = "bg-accent text-white hover:bg-accent-hover active:scale-[0.98]";
        break;
      case "secondary":
        variantStyles = "bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 active:scale-[0.98]";
        break;
      case "outline":
        variantStyles = "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-white hover:text-black active:scale-[0.98]";
        break;
      case "ghost":
        variantStyles = "bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900";
        break;
      case "link":
        variantStyles = "bg-transparent text-accent hover:text-white underline underline-offset-4 p-0";
        break;
    }

    let sizeStyles = "";
    switch (size) {
      case "sm":
        sizeStyles = "px-3 py-1.5 text-xs";
        break;
      case "md":
        sizeStyles = "px-5 py-2.5 text-sm";
        break;
      case "lg":
        sizeStyles = "px-8 py-3.5 text-base";
        break;
    }

    // Adjust sizes for link variant
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
