import * as React from "react";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"input"> & {
  icon?: JSX.Element;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        <span
          className={cn(
            "absolute left-0 top-0 -z-10 inline-flex h-full items-center gap-2 pl-3",
            !props.value && "text-muted-foreground",
          )}
        >
          {icon}
        </span>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded border border-input bg-transparent py-5 pl-9 pr-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
