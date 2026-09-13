import type { Technology } from "../types/technology";

export interface TechCardProps {
  readonly tech: Technology;
  readonly onAdd: (tech: Technology) => void;
  readonly isAdded: boolean;
}

const getBadgeStyles = (badge: string): string => {
  switch (badge.toLowerCase()) {
    case "popular":
    case "essential":
    case "top sql":
    case "containers":
      return "bg-sky-50 text-sky-600 border-sky-200";
    case "versatile":
    case "standard":
      return "bg-emerald-50 text-emerald-600 border-emerald-200";
    case "fast":
      return "bg-orange-50 text-orange-600 border-orange-200";
    case "cache":
      return "bg-rose-50 text-rose-600 border-rose-200";
    case "ubiquitous":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "modern":
      return "bg-teal-50 text-teal-600 border-teal-200";
    case "robust":
      return "bg-indigo-50 text-indigo-600 border-indigo-200";
    default:
      return "bg-slate-50 text-slate-600 border-slate-200";
  }
};

const TechCard = ({ tech, onAdd, isAdded }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;


  const handleAddClick = (): void => {
    onAdd(tech);
  };

  return (
    <article
      aria-label={`${name} Technology Card`}
      className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden"
    >
      <div>
        <div className="flex items-start justify-between">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${getBadgeStyles(
              badge,
            )}`}
          >
            {badge}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mt-4">{name}</h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-9 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between gap-1.5 sm:gap-2 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 border border-pink-100 px-2.5 py-0.5 rounded-full shrink-0">
            {category}
          </span>
          <span className="truncate min-w-0 text-center" title={difficulty}>
            {difficulty}
          </span>
          <div
            className="flex items-center gap-1 font-semibold text-slate-700 shrink-0 whitespace-nowrap"
            aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
          >
            <span className="text-amber-500 leading-none" aria-hidden="true">
              ★
            </span>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-disabled={isAdded}
        disabled={isAdded}
        onClick={handleAddClick}
        aria-label={
          isAdded
            ? `${name} is already added to stack`
            : `Add ${name} to stack`
        }
        className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-pink-500 ${
          isAdded
            ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
            : "bg-slate-900 hover:bg-slate-800 text-white border-transparent active:scale-95 cursor-pointer shadow-xs"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechCard;
