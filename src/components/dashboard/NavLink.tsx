import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router";

type Props = {
  className?: string;
  href: string;
} & PropsWithChildren;

export const MyNavLink = ({ href, children, className }: Props) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "text-muted-foreground hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-semibold",
          isActive && "text-red-600",
          className
        )
      }
    >
      {children}
    </NavLink>
  );
};
