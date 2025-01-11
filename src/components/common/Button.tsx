import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "fill" | "line";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  size = "medium",
  variant = "fill",
  disabled = false,
  className = "",
}) => {
  const baseClass =
    "rounded-full border min-w-[150px] flex items-center justify-center relative transition-all duration-300 ease-in-out";
  const sizeClass =
    size === "small"
      ? "px-3 py-2 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-md";
  const variantClass =
    variant === "fill"
      ? "bg-brand-400 text-white border-brand-400 hover:bg-brand-500 hover:border-brand-500"
      : "bg-transparent text-brand-400 border-brand-400 hover:border-brand-500 hover:text-brand-500";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseClass} ${sizeClass} ${variantClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
