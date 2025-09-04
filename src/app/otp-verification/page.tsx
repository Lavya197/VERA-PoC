"use client";

import AuthLayout from "@/components/layout/AuthLayout";
import PageTransition from "@/components/animations/PageTransition";
import OTPVerificationForm from "@/components/auth/OTPVerificationForm";

export default function OTPVerificationPage() {
  return (
    <AuthLayout>
      <PageTransition keyName="otp-verification">
        <OTPVerificationForm />
      </PageTransition>
    </AuthLayout>
  );
}
