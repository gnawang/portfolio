"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface PolaroidPhotoProps {
  /** URL of the image to display */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional caption displayed below the image */
  caption?: string;
  /** Optional CSS classes for the container */
  className?: string;
  /** Rotation angle in degrees (-3 to 3 recommended for subtle effect) */
  rotation?: number;
}

/**
 * A reusable Polaroid-style photo component with aesthetic styling.
 * Features a white border frame, subtle shadow, optional tilt, and caption area.
 */
export function PolaroidPhoto({
  src,
  alt,
  caption,
  className,
  rotation = 0,
}: PolaroidPhotoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "group relative inline-block bg-white p-3 pb-12 shadow-lg transition-all duration-500",
        "hover:shadow-xl hover:scale-105",
        !isLoaded ? "opacity-0 scale-95" : "opacity-100 scale-100",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Photo container with fixed aspect ratio */}
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
        {!isLoaded && (
          <Skeleton className="absolute inset-0 z-10 rounded-none" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-all duration-700 group-hover:scale-105",
            isLoaded ? "blur-0 scale-100" : "blur-sm scale-110"
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Caption area - mimics the classic Polaroid bottom space */}
      <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center px-2">
        {caption && (
          <p
            className="text-sm text-neutral-600 text-center truncate font-handwriting"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            {caption}
          </p>
        )}
      </div>

      {/* Subtle paper texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-black/5" />
    </div>
  );
}

