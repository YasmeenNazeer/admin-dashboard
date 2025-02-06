"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#131417]">
      {/* Background Dots Animation */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Circular Loading Indicator */}
      <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-cyan-400/30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full border-4 border-cyan-400 rounded-full opacity-30"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>
      
      {/* Loading Text */}
      <h2 className="text-cyan-400 text-lg font-semibold mt-6">LOADING</h2>
    </div>
  );
}
