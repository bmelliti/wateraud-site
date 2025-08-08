export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Skeleton */}
      <div className="bg-neutral-200 h-[400px] animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="h-8 bg-neutral-200 rounded w-1/3 animate-pulse" />
        <div className="space-y-4">
          <div className="h-4 bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 bg-neutral-200 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-neutral-200 rounded w-4/6 animate-pulse" />
        </div>
      </div>
    </div>
  );
}