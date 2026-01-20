"use client";

import { useEffect } from "react";
import { usePortal, PortalConfig } from "./PortalContext";

interface PortalPageProps {
  config: Partial<PortalConfig>;
  children: React.ReactNode;
}

export function PortalPage({ config, children }: PortalPageProps) {
  const { setConfig } = usePortal();

  useEffect(() => {
    setConfig(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    config.width,
    config.height,
    config.maxWidth,
    config.maxHeight,
    config.title,
    setConfig,
  ]);

  return <>{children}</>;
}
