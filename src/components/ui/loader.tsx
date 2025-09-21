"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({
  className = "w-40 h-40",
  progressBarClassName = "w-64",
}) {
  // Progress bar state (0 to 100)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Loop the progress bar
    if (progress < 100) {
      const timeout = setTimeout(() => setProgress(progress + 2), 18);
      return () => clearTimeout(timeout);
    } else {
      // Reset to 0 when reaching 100 for a repeated effect
      const timeout = setTimeout(() => setProgress(0), 300);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-neutral-950 z-50">
      <motion.img
        src="/images/apex.png"
        alt="Apex Loader"
        className={className}
        initial={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        draggable={false}
      />
      <div
        className={`${progressBarClassName} mt-10 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden`}
      >
        <motion.div
          className="h-full bg-gradient-to-l from-red-950 via-red-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.18 }}
        />
      </div>
    </div>
  );
}