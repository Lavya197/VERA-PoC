"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call, then redirect
    setTimeout(() => {
      setLoading(false);
      router.push("/otp-verification"); // ✅ Navigate to OTP page
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-xl font-semibold text-gray-800">Password Reset</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter the email used for creating the account. We will send you an email.
      </p>

      <InputField type="email" placeholder="Enter Your Email" required />

      <Button type="submit" variant="primary" loading={loading}>
        Verify Email
      </Button>
    </form>
  );
}
