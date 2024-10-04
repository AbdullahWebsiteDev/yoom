import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import React from "react";
import {SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full px-6 py-4 flex-between bg-dark-1 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>

      <div className="gap-5 flex-between">
        <SignedIn>
          <UserButton />
        </SignedIn>
        
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
