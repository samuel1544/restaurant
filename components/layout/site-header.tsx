import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/layout/nav-links";
import { SearchForm } from "@/components/layout/search-form";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky pt-5 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <NavLinks className="hidden lg:flex" />

        <div className="flex items-center gap-3">
          <SearchForm className="hidden md:flex" />
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "hidden sm:rounded-[5px] lg:inline-flex"
            )}
          >
            Commander
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
