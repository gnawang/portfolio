import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/**
 * A simple skeleton primitive for loading states.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800", className)}
    />
  );
}

/**
 * A skeleton that mimics the Polaroid component.
 */
export function PolaroidSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-block bg-white p-3 pb-12 shadow-md dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800",
        className
      )}
    >
      <Skeleton className="aspect-square w-full rounded-none" />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
