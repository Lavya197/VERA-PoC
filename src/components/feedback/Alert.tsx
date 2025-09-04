"use client";

import { motion } from "framer-motion";

interface AlertProps {
  type?: "success" | "error" | "info";
  message: string;
}

export default function Alert({ type = "info", message }: AlertProps) {
  const colors = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`p-3 rounded-md border text-sm ${colors[type]}`}
    >
      {message}
    </motion.div>
  );
}
