import type { ReactNode } from "react";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

interface CardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: string;
    direction: "up" | "down" | "neutral";
    label?: string;
  };
  className?: string;
}

export default function Card({
  title,
  value,
  icon,
  trend,
  className = "",
}: CardProps) {
  return (
    <div
      className={`flex-1 bg-white rounded-xl border border-slate-200 px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{icon}</div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        {trend && (
          <div className="flex items-center gap-2 text-sm">
            <span
              className={`flex items-center gap-1 font-medium ${
                trend.direction === "up"
                  ? "text-emerald-600"
                  : trend.direction === "down"
                    ? "text-red-600"
                    : "text-slate-600"
              }`}
            >
              {trend.direction === "up" && <ArrowUp size={16} />}
              {trend.direction === "down" && <ArrowDown size={16} />}
              {trend.direction === "neutral" && <Minus size={16} />}
              {trend.value}
            </span>
            {trend.label && (
              <span className="text-slate-500">{trend.label}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
