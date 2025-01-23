import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Logo from "@/assets/Logo.png";
import { NAV_LINKS } from "@/lib/constant";
import { IoMenu } from "react-icons/io5";
import { MyNavLink } from "./NavLink";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} className="h-[20px]" alt="PPOB Logo" />
          <span className="font-semibold">
            SIMS PPOB <span className="hidden md:inline">ARDIAN </span>
            <span>EKA</span>
            <span className="hidden md:inline"> CANDRA</span>
          </span>
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((nav) => (
            <MyNavLink key={nav.title} href={nav.href}>
              {nav.title}
            </MyNavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <IoMenu className="size-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                {NAV_LINKS.map((nav) => (
                  <MyNavLink
                    key={nav.title}
                    href={nav.href}
                    className="text-sm font-medium"
                  >
                    {nav.title}
                  </MyNavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
