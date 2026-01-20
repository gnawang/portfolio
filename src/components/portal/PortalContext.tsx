"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface PortalConfig {
  width: string | number;
  height: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  title: string;
}

interface PortalContextType {
  config: PortalConfig;
  setConfig: (config: Partial<PortalConfig>) => void;
}

const defaultPortalConfig: PortalConfig = {
  width: "60%",
  maxHeight: "600px",
  maxWidth: "800px",
  height: "50%",
  title: "home",
};

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export function PortalProvider({ children }: { children: ReactNode }) {
  const [config, setPortalConfig] = useState<PortalConfig>(defaultPortalConfig);

  const setConfig = useCallback((newConfig: Partial<PortalConfig>) => {
    setPortalConfig((prev) => {
      // Check if any value actually changed
      const hasChanged = Object.entries(newConfig).some(
        ([key, value]) => prev[key as keyof PortalConfig] !== value
      );
      if (!hasChanged) return prev;
      return { ...prev, ...newConfig };
    });
  }, []);

  return (
    <PortalContext.Provider value={{ config, setConfig }}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (context === undefined) {
    throw new Error("usePortal must be used within a PortalProvider");
  }
  return context;
}
