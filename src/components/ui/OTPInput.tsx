"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface OTPInputProps {
  length?: number;
  onChange: (otp: string) => void;
}

export default function OTPInput({ length = 4, onChange }: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (val: string, idx: number) => {
    const newOtp = [...otp];
    newOtp[idx] = val.slice(-1);
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (val && idx < length - 1) inputs.current[idx + 1]?.focus();
  };

  return (
    <div className="flex justify-center gap-4">
  {otp.map((digit, idx) => (
    <motion.input
      key={idx}
      ref={(el) => (inputs.current[idx] = el)}
      value={digit}
      maxLength={1}
      onChange={(e) => handleChange(e.target.value, idx)}
      className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
    />
  ))}
</div>
  );
}
