"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePortal } from "./PortalContext";
import { usePathname } from "next/navigation";

export function PortalContainer({ children }: { children: React.ReactNode }) {
  const { config } = usePortal();
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-bg-green flex items-center justify-center p-4">
      <motion.div
        layout
        initial={false}
        animate={{
          width: config.width,
          height: config.height,
          maxWidth: config.maxWidth || "none",
          maxHeight: config.maxHeight || "none",
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
        }}
        className="bg-bg-primary rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-text-main flex flex-col relative"
      >
        {/* Window Header */}
        <motion.div 
          layout="position"
          className="bg-text-main px-4 py-2 flex items-center flex-shrink-0 z-10"
        >
          <motion.span 
            layout="position"
            key={config.title}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-bg-primary font-seurat text-sm tracking-wider uppercase font-bold"
          >
            {config.title}
          </motion.span>
        </motion.div>

        {/* Window Content */}
        <div className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
