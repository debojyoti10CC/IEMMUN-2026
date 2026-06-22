"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback safety timeout in case video loading fails or takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5 seconds safety limit
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const handleVideoEnd = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto"
        >
          <video
            src="/preloader.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
