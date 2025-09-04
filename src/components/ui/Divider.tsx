"use client";

import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center my-4"
    >
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-3 text-sm text-gray-500">or</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </motion.div>
  );
}
