"use client";

import Image from "next/image";

interface LogoProps {
  src?: string; // optional logo image
}

export default function Logo({ src }: LogoProps) {
  return (
    <div className="flex items-center gap-0">
      {src ? (
        <Image src={src} alt="Logo" width={64} height={64} />
      ) : (
        <Image src="/pictures/logo.jpg" alt="Logo" width={64} height={64} />
      )}
      <span className="text-3xl font-bold text-purple-700 ml-0.5">
        VERA
      </span>
    </div>
  );
}
