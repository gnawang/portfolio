"use client";

import Link from "next/link";
import { ArrowLeft, Code, Palette, Zap } from "lucide-react";
import { PortalPage } from "@/components/portal/PortalPage";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutPage() {
  const skills = {
    technical: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "Supabase",
      "Tailwind CSS",
      "AI-assisted development (Cursor, Claude Code)",
      "CSS",
      "HTML",
    ],
    design: [
      "Figma",
      "Framer",
      "User Research",
      "Interaction Design",
      "Design Systems",
    ],
    prototyping: [
      "Rapid Prototyping",
      "Wireframing",
      "Mockups",
      "MVP Strategies",
      "Agile/Scrum",
      "Iterative Development",
    ],
  };

  return (
    <PortalPage
      config={{
        width: "90%",
        maxWidth: "1000px",
        height: "85%",
        maxHeight: "800px",
        title: "about_me",
      }}
    >
      <div className="p-8 md:p-12">
        <header className="mb-12 relative">
          <Link
            href="/"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-text-main hover:text-text-highlight transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline font-seurat text-sm font-bold uppercase">
              back
            </span>
          </Link>
          <div className="text-center">
            <h1 className="font-rodin text-4xl md:text-5xl text-text-main mb-2 italic">
              About <span className="text-text-highlight">Me</span>
            </h1>
          </div>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Introduction Section */}
          <motion.section variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Software Developer", "UX Designer", "Prototyper"].map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 bg-text-main text-bg-primary font-seurat text-sm font-bold uppercase tracking-wider rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="font-seurat text-xl text-text-main leading-relaxed">
              I specialize in <span className="font-bold underline decoration-text-highlight decoration-2 underline-offset-4">0-to-1 prototyping</span>, 
              bridging the gap between design and engineering to build products that are as functional as they are beautiful. 
              My expertise lies in transforming abstract ideas into tangible, high-quality digital experiences.
            </p>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={itemVariants} className="space-y-10">
            <h2 className="font-rodin text-2xl text-center text-text-main border-b-2 border-text-main/10 pb-4">
              My Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Tech Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-text-highlight">
                  <Code size={20} />
                  <h3 className="font-rodin text-lg font-bold uppercase tracking-wide">
                    Tech Stack
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skills.technical.map((skill) => (
                    <li key={skill} className="font-seurat text-text-main/80 flex items-center gap-2">
                      <div className="w-1 h-1 bg-text-highlight rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-text-highlight">
                  <Palette size={20} />
                  <h3 className="font-rodin text-lg font-bold uppercase tracking-wide">
                    Design
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skills.design.map((skill) => (
                    <li key={skill} className="font-seurat text-text-main/80 flex items-center gap-2">
                      <div className="w-1 h-1 bg-text-highlight rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prototyping */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-text-highlight">
                  <Zap size={20} />
                  <h3 className="font-rodin text-lg font-bold uppercase tracking-wide">
                    Prototyping
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skills.prototyping.map((skill) => (
                    <li key={skill} className="font-seurat text-text-main/80 flex items-center gap-2">
                      <div className="w-1 h-1 bg-text-highlight rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Collaboration CTA */}
          <motion.section 
            variants={itemVariants} 
            className="bg-text-main p-8 md:p-12 rounded-xl text-center text-bg-primary"
          >
            <h2 className="font-rodin text-3xl md:text-4xl mb-6 italic">
              Let&apos;s build something together.
            </h2>
            <p className="font-seurat text-lg mb-8 max-w-xl mx-auto opacity-90">
              I&apos;m always looking for interesting projects and collaborations. 
              Whether you have a specific idea or just want to chat, feel free to reach out.
            </p>
            <Link 
              href="mailto:hello@gnawang.com" 
              className="inline-block px-8 py-3 bg-bg-primary text-text-main font-seurat font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-transform border-2 border-transparent hover:border-text-highlight"
            >
              Get in Touch
            </Link>
          </motion.section>
        </motion.div>
      </div>
    </PortalPage>
  );
}
