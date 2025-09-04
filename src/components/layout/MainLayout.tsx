// src/components/layout/MainLayout.tsx
"use client";

import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">Header</header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-200 text-center p-4">Footer</footer>
    </div>
  );
}
