"use client";

import { useState } from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

export default function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-xl font-semibold text-gray-800">Password Reset</h2>
      <p className="text-sm text-gray-500 mb-6">Enter your new password below.</p>

      <InputField type="password" placeholder="Enter Your Password" required />
      <InputField type="password" placeholder="Confirm Password" required />

      <Button type="submit" variant="primary" loading={loading}>
        Change Password
      </Button>
    </form>
  );
}
