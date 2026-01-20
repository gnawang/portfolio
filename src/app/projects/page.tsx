"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { PortalPage } from "@/components/portal/PortalPage";

export default function ProjectsPage() {
  return (
    <PortalPage
      config={{
        width: "80%",
        maxWidth: "1400px",
        height: "75%",
        maxHeight: "900px",
        title: "projects",
      }}
    >
      <div className="p-8 md:p-12">
        <header className="mb-12 relative">
          <Link 
            href="/" 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-text-main hover:text-text-highlight transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline font-seurat text-sm font-bold uppercase">back</span>
          </Link>
          <div className="text-center">
            <h1 className="font-rodin text-4xl md:text-5xl text-text-main mb-4">
              My <span className="text-text-highlight">Projects</span>
            </h1>
            <p className="font-seurat text-lg text-text-main max-w-2xl mx-auto">
              A collection of things I&apos;ve built, designed, and experimented with.
            </p>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PortalPage>
  );
}
