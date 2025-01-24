import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import createBreakpoint from "@kodingdotninja/use-tailwind-breakpoint";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const { useBreakpoint, useBreakpointEffect } = createBreakpoint({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});
