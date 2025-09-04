"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "google";
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  loading = false,
  ...props
}: ButtonProps) {
  const base =
    "w-full py-2 rounded-md font-semibold flex items-center justify-center transition";
  const styles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    google:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 flex gap-2",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      disabled={loading}
      className={`${base} ${styles[variant]} ${loading ? "opacity-70" : ""}`}
      {...props}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-5 h-5 border-2 border-t-transparent border-white rounded-full"
        />
      ) : (
        children
      )}
    </motion.button>
  );
}
