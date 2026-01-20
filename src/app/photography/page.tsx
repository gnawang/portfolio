"use client";

import { getPortfolioPhotos } from "@/features/portfolio/actions";
import { PolaroidPhoto } from "@/components/ui/PolaroidPhoto";
import { PolaroidSkeleton } from "@/components/ui/Skeleton";
import { useEffect, useState } from "react";
import { Photo } from "@/types";
import { PortalPage } from "@/components/portal/PortalPage";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Photography Grid Component - Fetches and displays photos.
 */
function PhotographyGrid() {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getPortfolioPhotos()
      .then(setPhotos)
      .catch((err) => {
        console.error("Error in PhotographyGrid:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
        <p className="text-destructive">Unable to load photos. Please try again later.</p>
      </div>
    );
  }

  if (photos === null) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex justify-center">
            <PolaroidSkeleton className="w-full max-w-xs" />
          </div>
        ))}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <p className="text-muted-foreground">
          No photos yet. Upload some images to your Supabase storage bucket to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo: Photo) => (
        <div key={photo.id} className="flex justify-center">
          <PolaroidPhoto
            src={photo.url}
            alt={photo.name}
            caption={photo.name}
            rotation={photo.rotation}
            className="w-full max-w-xs"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Portfolio page - refactored to use PortalPage.
 */
export default function PhotographyPage() {
  return (
    <PortalPage
      config={{
        width: "100%",
        height: "100%",
        title: "album",
      }}
    >
      <div className="p-8 md:p-12">
        <header className="mb-16 relative">
          <Link 
            href="/" 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-text-main hover:text-text-highlight transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline font-seurat text-sm font-bold uppercase">back</span>
          </Link>
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-rodin text-text-main tracking-tight italic">Photography</h1>
            <p className="text-xl font-seurat text-text-main/70">
              A collection of moments captured through my lens
            </p>
          </div>
        </header>

        <PhotographyGrid />
      </div>
    </PortalPage>
  );
}
