"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
}

export function NavButton({ href, icon: Icon, label, disabled }: NavButtonProps) {
  const content = (
    <div className={`flex flex-col items-center gap-2 group ${disabled ? 'opacity-100 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className={`w-16 h-16 rounded-2xl border-2 bg-white flex items-center justify-center transition-transform ${!disabled && 'group-hover:scale-105 group-active:scale-95'} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] ${disabled ? 'border-text-disabled text-text-disabled' : 'border-text-main text-text-main'}`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <span className={`font-seurat text-sm font-bold tracking-wide uppercase ${disabled ? 'text-text-disabled' : 'text-text-main'}`}>
        {label}
      </span>
    </div>
  );

  if (disabled) {
    return content;
  }

  return (
    <Link href={href}>
      {content}
    </Link>
  );
}
