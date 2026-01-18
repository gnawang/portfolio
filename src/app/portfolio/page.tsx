"use client";

import { useEffect, useState } from "react";
import { getPortfolioPhotos } from "@/features/portfolio/actions";
import { PolaroidPhoto } from "@/components/ui/PolaroidPhoto";
import { PolaroidSkeleton } from "@/components/ui/Skeleton";

interface Photo {
  id: string;
  url: string;
  name: string;
  rotation: number;
}

/**
 * Portfolio page - displays all photos from Supabase Storage in a Polaroid grid.
 * Client Component that tracks loading state.
 */
export default function PortfolioPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const photoData = await getPortfolioPhotos();
        setPhotos(photoData);
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Unable to load photos. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 p-8 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            A collection of moments captured through my lens
          </p>
        </header>

        {error ? (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
            <p className="text-destructive">{error}</p>
          </div>
        ) : isLoading ? (
          /* Loading State: Skeleton Grid */
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <PolaroidSkeleton className="w-full max-w-xs" />
              </div>
            ))}
          </div>
        ) : photos.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              No photos yet. Upload some images to your Supabase storage bucket to get started.
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </main>
  );
}

