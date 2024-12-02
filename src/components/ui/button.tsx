import { ReactNode, MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  ghost?: boolean;
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
  [key: string]: unknown;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  secondary,
  ghost,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "transition duration-300 ease-in-out",
        "group inline-flex items-center space-x-2 max-w-min whitespace-nowrap",
        "px-6 py-4 rounded-sm font-lato font-medium leading-none",
        "bg-brand-stroke-weak text-brand-black",
        {
          "bg-brand-primary text-white border border-brand-primary": secondary,
          "border border-brand-stroke-strong bg-brand-fill text-brand-text-weak":
            ghost,
          "cursor-not-allowed opacity-50": disabled,
          "hover:opacity-90": !disabled,
        },
        className
      )}
      onClick={disabled ? undefined : onClick} // Prevent interaction when disabled
      aria-disabled={disabled}
      disabled={disabled}
      {...rest}
    >
      <span>{children}</span>
      <ChevronRight
        className={cn(
          "w-4 h-4 stroke-[2] transition-transform duration-300 ease-in-out transform",
          { "group-hover:translate-x-1": !disabled },
          iconClassName
        )}
      />
    </button>
  );
};

export default Button;
