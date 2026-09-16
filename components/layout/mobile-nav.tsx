"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";

import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/layout/nav-links";
import { SearchForm } from "@/components/layout/search-form";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="outline" size="icon" className="lg:hidden" />
        }
      >
        <MenuIcon />
        <span className="sr-only">Ouvrir le menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          <SearchForm className="w-full" />
          <NavLinks
            className="flex-col items-start gap-1"
            onNavigate={() => setOpen(false)}
          />
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={buttonVariants({ size: "lg", className: "rounded-sm" })}
          >
            Commander
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
