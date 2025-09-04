"use client";

import { useRouter } from "next/navigation";
import AuthLayout from "@/components/layout/AuthLayout";
import PageTransition from "@/components/animations/PageTransition";
import LoginForm from "@/components/auth/LoginForm";

export default function HomePage() {
  const router = useRouter();

  return (
    <AuthLayout rightBg="/auth-bg.png">
      <PageTransition keyName="login">
        <LoginForm
          onForgotPassword={() => router.push("/forgot-password")}
          onLogin={() => console.log("Login clicked")}
          onGoogleLogin={() => console.log("Google login")}
        />
      </PageTransition>
    </AuthLayout>
  );
}
