import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div
      className="flex items-center justify-between
    p-3 px-5 shadow-sm border-b-[1px]"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          className="cursor-pointer"
          width={100}
          height={100}
        />
      </Link>
      <div className="hidden md:flex gap-2">
        <Link href="/">
          <h1 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Home
          </h1>
        </Link>{" "}
        <Link href="/history">
          <h1 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            History
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Contact Us
          </h1>
        </Link>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;
