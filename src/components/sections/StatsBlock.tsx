interface Stat {
  value: string;
  label: string;
}

interface StatsBlockProps {
  stats: Stat[];
  className?: string;
}

/** Renders a responsive grid of “big-number” stats */
export function StatsBlock({ stats, className = '' }: StatsBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}
      aria-label="Key performance metrics"
    >
      {stats.map((s, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-8 text-center"
        >
          <div className="text-5xl font-bold text-white leading-none">
            {s.value}
          </div>
          <div className="text-lg font-medium text-accent-50 mt-2">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}