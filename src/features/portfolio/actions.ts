"use server";

import { createClient } from "@supabase/supabase-js";
import { Photo } from "@/types";

/**
 * Fetches the list of photos from Supabase Storage using the secret key (service role).
 * This bypasses RLS restrictions for listing while keeping the credentials secure on the server.
 */
export async function getPortfolioPhotos(): Promise<Photo[]> {
  const BUCKET_NAME = "photos";
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );

  const { data: files, error } = await supabase.storage
    .from(BUCKET_NAME)
    .list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });

  if (error) {
    console.error("Error listing storage files:", error);
    throw new Error("Failed to list photos from storage.");
  }

  // Filter and generate public URLs
  const photos = (files || [])
    .filter((file) => {
      const ext = file.name.toLowerCase().split(".").pop();
      return ["jpg", "jpeg", "png", "gif", "webp", "avif"].includes(ext || "");
    })
    .map((file, index) => {
      const {
        data: { publicUrl },
      } = supabase.storage.from(BUCKET_NAME).getPublicUrl(file.name);

      return {
        id: file.id || file.name,
        url: publicUrl,
        name: file.name.replace(/\.[^/.]+$/, ""),
        rotation: ((index % 5) - 2) * 1.5,
      };
    });

  return photos;
}
