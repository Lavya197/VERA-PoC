"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import PageTransition from "@/components/animations/PageTransition";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <PageTransition keyName="forgot-password">
        <ForgotPasswordForm />
      </PageTransition>
    </AuthLayout>
  );
}
