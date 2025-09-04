"use client";

import { useState } from "react";
import OTPInput from "../ui/OTPInput";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function OTPVerificationForm() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulate API verify
    setTimeout(() => {
      setLoading(false);
      router.push("/reset-password"); // ✅ Navigate to reset-password page
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-xl font-semibold text-gray-800">OTP Verification</h2>
      <p className="text-sm text-gray-500 mb-6">
        We have sent a verification code to your email. OTP is valid for 10 min.
      </p>

      <OTPInput length={6} onChange={setOtp} />

      <div className="flex justify-between items-center text-sm text-gray-500 my-4">
        <span>Resend OTP ({timer})</span>
        <button type="button" className="text-purple-600 hover:underline">
          Resend
        </button>
      </div>

      <Button
        type="submit"
        variant="primary"
        loading={loading}
        disabled={otp.length < 6}
      >
        Verify
      </Button>
    </form>
  );
}
