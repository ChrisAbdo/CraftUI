"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RocketIcon, StarIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import { Search } from "./search";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center space-x-2">
            <RocketIcon className="h-5 w-5 text-foreground" />
            <span className="overflow-auto font-semibold leading-tight tracking-tight">
              CraftUI
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <Menu className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <Search />
          <Button size="sm" className="hidden md:flex">
            <StarIcon className="h-5 w-5 mr-2" /> Star on GitHub
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
