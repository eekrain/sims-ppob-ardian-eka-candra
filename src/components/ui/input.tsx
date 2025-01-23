import * as React from "react";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"input"> & {
  placeholderIcon?: JSX.Element;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, placeholder, placeholderIcon, value, ...props }, ref) => {
    const Placeholder = () => {
      if (!placeholderIcon) return null;
      if (value) return null;
      return (
        <span className="inline-flex items-center gap-2 absolute -z-10 left-0 top-0 h-full pl-3 text-muted-foreground">
          {placeholderIcon}
          <span>{placeholder}</span>
        </span>
      );
    };

    return (
      <div className="relative">
        <Placeholder />
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-5 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          placeholder={placeholderIcon ? undefined : placeholder}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
