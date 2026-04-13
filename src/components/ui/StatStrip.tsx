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
      className={`flex flex-wrap justify-center gap-6 md:gap-10 ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-display text-[28px] md:text-[36px] leading-none text-teal tracking-tight">
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
