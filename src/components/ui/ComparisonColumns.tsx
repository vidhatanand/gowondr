interface ColumnData {
  title: string;
  items: string[];
}

interface ComparisonColumnsProps {
  left: ColumnData;
  right: ColumnData;
  variant?: "default" | "teal";
  className?: string;
}

export function ComparisonColumns({
  left,
  right,
  variant = "default",
  className = "",
}: ComparisonColumnsProps) {
  const isOnTeal = variant === "teal";

  const cardBg = isOnTeal
    ? "bg-paper/10 border-paper/20"
    : "bg-paper border-sand";
  const titleColor = isOnTeal ? "text-paper" : "text-ink";
  const itemColor = isOnTeal ? "text-paper/80" : "text-slate";
  const dotColor = isOnTeal ? "bg-paper/50" : "bg-teal";

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 ${className}`}>
      {[left, right].map((col) => (
        <div
          key={col.title}
          className={`rounded-2xl border p-6 md:p-7 ${cardBg}`}
        >
          <h3
            className={`font-display text-[22px] md:text-[24px] leading-tight mb-4 ${titleColor}`}
          >
            {col.title}
          </h3>
          <ul className="space-y-2.5">
            {col.items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-2.5 text-[15px] leading-relaxed ${itemColor}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 shrink-0`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
