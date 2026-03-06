import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  bgColor,
  textColor,
}: StatsCardProps) {
  const isPositive = change ? change >= 0 : true;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {change !== undefined && (
            <p
              className={`text-sm mt-2 ${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {isPositive ? "+" : ""}{change}% from last month
            </p>
          )}
        </div>
        <div className={`${bgColor} ${textColor} p-3 rounded-lg`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}