"use client";

import InputField from "../ui/InputField";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import Divider from "../ui/Divider";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onForgotPassword?: () => void;
  onLogin?: () => void;
  onGoogleLogin?: () => void;
}

export default function LoginForm({ onForgotPassword, onLogin, onGoogleLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onLogin?.();
      }}
    >
      {/* Heading */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Welcome Back!</h2>
        <p className="text-base md:text-lg text-gray-700">
          We are Happy To See You Again
        </p>
      </div>

      {/* Email Input */}
      <InputField
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <InputField
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Remember Me + Forgot Password */}
      <div className="flex items-center justify-between">
        <Checkbox label="Remember me" />
        <button
          type="button"
          onClick={() => router.push("/forgot-password")} // ✅ Navigate to forgot-password
          className="text-sm text-purple-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <Button type="submit">Login</Button>

      <Divider text="or" />

      {/* Google Sign-In */}
      <button
        type="button"
        onClick={onGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-50"
      >
        <Image
          src="/pictures/google_icon.png"
          alt="Google"
          width={20}
          height={20}
        />
        <span className="text-sm font-medium text-gray-700">
          Sign In with Google
        </span>
      </button>
    </form>
  );
}
