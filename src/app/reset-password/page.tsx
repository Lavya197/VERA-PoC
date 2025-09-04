"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import PageTransition from "@/components/animations/PageTransition";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <PageTransition keyName="reset-password">
        <ResetPasswordForm />
      </PageTransition>
    </AuthLayout>
  );
}
