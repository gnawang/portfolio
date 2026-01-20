"use client";

import { NavButton } from "@/components/nav-button";
import { Info, LayoutGrid, Image as ImageIcon } from "lucide-react";
import { PortalPage } from "@/components/portal/PortalPage";

export default function Home() {
  return (
    <PortalPage
      config={{
        width: "60%",
        maxWidth: "800px",
        height: "50%",
        maxHeight: "600px",
        title: "home",
      }}
    >
      <div className="p-12 md:p-20 flex flex-col items-center text-center">
        <h1 className="font-rodin text-5xl md:text-7xl text-text-main mb-4">
          Hi, I&apos;m <span className="text-text-highlight">Alex</span>
        </h1>
        <p className="font-seurat text-xl md:text-2xl text-text-main mb-16">
          developer | designer
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <NavButton href="/about" icon={Info} label="about" />
          <NavButton href="/projects" icon={LayoutGrid} label="projects" />
          <NavButton href="/photography" icon={ImageIcon} label="album" />
        </div>
      </div>
    </PortalPage>
  );
}
