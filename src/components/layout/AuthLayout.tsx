"use client";

import Image from "next/image";
import { ReactNode } from "react";
import Logo from "../ui/Logo";

interface AuthLayoutProps {
  children: ReactNode;
  rightBg?: string; // optional background image
}

export default function AuthLayout({ children, rightBg }: AuthLayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Section */}
      <div className="flex w-full md:w-1/2 flex-col justify-center items-center px-8 md:px-20 bg-white">
        <div className="w-full max-w-md">
          <Logo />
          <div className="mt-8">{children}</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 relative">
        {rightBg ? (
          <Image
            src={""}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-purple-600 to-black" />
        )}
      </div>
    </div>
  );
}
