import type { Technology } from "../types/technology";

export interface YourStackProps {
  readonly stack: readonly Technology[];
  readonly onRemove: (id: string) => void;
  readonly onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  const isEmpty = stack.length === 0;

  const handleItemRemove = (id: string): void => {
    onRemove(id);
  };

  const handleClearAllClick = (): void => {
    onRemoveAll();
  };

  return (
    <aside
      aria-label="Selected Technology Stack"
      className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-20"
    >
      <div>
        <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
        <p className="text-xs text-slate-500 mt-1" aria-live="polite">
          {isEmpty
            ? "No technologies selected yet."
            : `${stack.length} ${
                stack.length === 1 ? "Technology" : "Technologies"
              } Selected`}
        </p>
      </div>

      {isEmpty ? (
        <div
          role="status"
          className="border border-dashed border-slate-200 rounded-xl py-6 px-4 flex items-center justify-center mt-4"
        >
          <span className="text-slate-400 text-xs">Your stack is empty.</span>
        </div>
      ) : (
        <div className="mt-5">
          <div
            role="list"
            className="flex flex-col gap-2.5 max-h-96 sm:max-h-120 lg:max-h-140 overflow-y-auto pr-1"
          >
            {stack.map((item) => (
              <div
                key={item.id}
                role="listitem"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 ease-out hover:border-slate-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-7 h-7 object-contain shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </p>
                    <span className="text-xs text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${item.name} from stack`}
                  onClick={() => handleItemRemove(item.id)}
                  className="shrink-0 ml-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg text-sm p-1.5 leading-none transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleClearAllClick}
            aria-label="Remove all technologies from stack"
            className="w-full mt-5 py-2.5 rounded-xl border border-rose-200 text-red-600 hover:bg-rose-50 font-bold text-xs transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;
