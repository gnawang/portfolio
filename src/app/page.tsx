"use client";

import { NavButton } from "@/components/nav-button";
import { Info, Briefcase, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-green flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-bg-primary rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-text-main">
        {/* Window Header */}
        <div className="bg-text-main px-4 py-2 flex items-center">
          <span className="text-bg-primary font-seurat text-sm tracking-wider uppercase font-bold">home</span>
        </div>

        {/* Window Content */}
        <div className="p-12 md:p-20 flex flex-col items-center text-center">
          <h1 className="font-rodin text-5xl md:text-7xl text-text-main mb-4">
            Hi, I'm <span className="text-text-highlight italic">Alex</span>
          </h1>
          <p className="font-seurat text-xl md:text-2xl text-text-main mb-16">
            developer | designer
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <NavButton 
              href="#" 
              icon={Info} 
              label="about" 
              disabled 
            />
            <NavButton 
              href="#" 
              icon={Briefcase} 
              label="work" 
              disabled 
            />
            <NavButton 
              href="/photography" 
              icon={ImageIcon} 
              label="album" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
