import type { Technology } from "../types/technology";

export interface TechCardProps {
  readonly tech: Technology;
  readonly onAdd: (tech: Technology) => void;
  readonly isAdded: boolean;
}

const getBadgeStyles = (badge: string): string => {
  switch (badge.toLowerCase()) {
    case "popular":
    case "top sql":
    case "essential":
    case "robust":
    case "containers":
      return "bg-sky-50 text-sky-500";
    case "versatile":
    case "standard":
      return "bg-emerald-50 text-emerald-500";
    case "fast":
      return "bg-orange-50 text-orange-500";
    case "cache":
      return "bg-rose-50 text-rose-500";
    case "ubiquitous":
      return "bg-amber-50 text-amber-600";
    case "modern":
      return "bg-teal-50 text-teal-600";
    default:
      return "bg-slate-50 text-slate-600";
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
      className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between min-h-[32px]">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
          {badge ? (
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full shrink-0 ${getBadgeStyles(
                badge,
              )}`}
            >
              {badge}
            </span>
          ) : (
            <span className="invisible text-[11px] px-2.5 py-0.5">_</span>
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 mt-3.5">{name}</h3>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-9 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between gap-1.5 text-xs mt-4">
          <span className="text-[11px] font-medium text-slate-600 bg-slate-100/90 px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="text-slate-500 text-xs">
            {difficulty}
          </span>
          <div
            className="flex items-center gap-1 font-semibold text-slate-700 text-xs shrink-0"
            aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
          >
            <span className="text-amber-400 leading-none" aria-hidden="true">
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
        className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900 ${
          isAdded
            ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
            : "bg-[#0B132B] hover:bg-[#1C2541] text-white active:scale-98 cursor-pointer"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechCard;
