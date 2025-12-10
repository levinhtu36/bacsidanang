const SkeletonCard = () => (
  <div className="rounded-3xl border border-border bg-card flex flex-col h-full overflow-hidden animate-pulse">
    <div className="p-5 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0" />
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-3 bg-muted rounded w-1/3" />
        <div className="h-3 bg-muted rounded w-full mt-2" />
      </div>
    </div>
    
    <div className="px-5 pb-4 flex-1 space-y-3">
      <div className="flex gap-3">
        <div className="w-5 h-5 bg-muted rounded-full" />
        <div className="h-4 bg-muted rounded w-full" />
      </div>
      <div className="flex gap-3">
        <div className="w-5 h-5 bg-muted rounded-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
      </div>
    </div>

    <div className="p-4 border-t border-border bg-muted/50 flex gap-3 mt-auto">
      <div className="flex-1 h-10 bg-muted rounded-xl" />
      <div className="flex-1 h-10 bg-muted rounded-xl" />
    </div>
  </div>
);

export default SkeletonCard;
