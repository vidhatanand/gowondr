interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  className?: string;
}

export function StatStrip({ stats, className = "" }: StatStripProps) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-10 ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-display text-[24px] md:text-[36px] leading-none text-teal tracking-tight">
            {stat.value}
          </div>
          <div className="mt-1 text-[13px] text-slate font-medium uppercase tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
