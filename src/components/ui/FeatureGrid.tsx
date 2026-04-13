import { type ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  features,
  columns = 3,
  className = "",
}: FeatureGridProps) {
  return (
    <div className={`grid ${columnClasses[columns]} gap-5 ${className}`}>
      {features.map((f) => (
        <div
          key={f.title}
          className="group rounded-xl border border-sand bg-paper p-5 md:p-6 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-soft text-teal mb-3 group-hover:bg-teal group-hover:text-paper transition-colors duration-200">
            {f.icon}
          </div>
          <h3 className="font-body font-semibold text-[16px] text-ink leading-tight mb-1.5">
            {f.title}
          </h3>
          <p className="text-[14px] text-slate leading-relaxed">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
}
