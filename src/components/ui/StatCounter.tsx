import type { StatItem } from "@/types";
import { useCountUp } from "@/hooks/useCountUp";

/** Displays a single animated statistic (e.g. "15+ Years of Experience"). */
export function StatCounter({ stat }: { stat: StatItem }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="panel px-6 py-5">
      <div className="font-mono text-3xl font-semibold text-ink-100">
        <span ref={ref}>{value}</span>
        {stat.suffix}
      </div>
      <div className="mt-1 text-sm text-ink-400">{stat.label}</div>
    </div>
  );
}
