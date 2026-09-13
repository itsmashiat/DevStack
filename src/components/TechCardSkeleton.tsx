const TechCardSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading technology card"
      className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs flex flex-col justify-between animate-pulse"
    >
      <div>
        <div className="flex items-start justify-between min-h-[32px]">
          <div className="skeleton w-8 h-8 rounded-lg shrink-0 bg-slate-200" />
          <div className="skeleton h-5 w-16 rounded-full shrink-0 bg-slate-200" />
        </div>

        <div className="skeleton h-5 w-28 rounded-md mt-3.5 bg-slate-200" />

        <div className="space-y-1.5 mt-2 min-h-9">
          <div className="skeleton h-3.5 w-full rounded bg-slate-200" />
          <div className="skeleton h-3.5 w-4/5 rounded bg-slate-200" />
        </div>

        <div className="flex items-center justify-between gap-1.5 mt-4">
          <div className="skeleton h-5 w-16 rounded shrink-0 bg-slate-200" />
          <div className="skeleton h-4 w-20 rounded shrink-0 bg-slate-200" />
          <div className="skeleton h-4 w-10 rounded shrink-0 bg-slate-200" />
        </div>
      </div>

      <div className="skeleton h-9 w-full rounded-xl mt-4 bg-slate-200" />
    </div>
  );
};

export default TechCardSkeleton;
