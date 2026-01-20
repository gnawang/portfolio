"use client";

import { Project } from "@/types";
import { Disc, Pencil, Search, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Pokeball: Disc,
  Pencil: Pencil,
  Search: Search,
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.iconName] || Search;

  return (
    <div className="group relative bg-bg-primary border-2 border-text-main rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
      {/* Trading Card Aesthetic Header */}
      <div className="w-full aspect-square bg-bg-green rounded-lg border-2 border-text-main mb-6 flex items-center justify-center overflow-hidden">
        <div className="transform transition-transform duration-500 group-hover:scale-110">
          <Icon size={64} className="text-text-main" strokeWidth={1.5} />
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-rodin text-2xl text-text-main uppercase tracking-tight">
            {project.title}
          </h3>
          {project.type && (
            <span className="font-seurat text-[10px] bg-text-main text-bg-primary px-2 py-0.5 rounded-full uppercase font-bold tracking-widest">
              {project.type}
            </span>
          )}
        </div>
        <p className="font-seurat text-sm text-text-main leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
