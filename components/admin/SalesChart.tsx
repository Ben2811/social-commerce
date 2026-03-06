interface ChartDataPoint {
  month: string;
  sales: number;
}

const chartData: ChartDataPoint[] = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 5300 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 6200 },
  { month: "May", sales: 7100 },
  { month: "Jun", sales: 6800 },
];

const maxSales = Math.max(...chartData.map((d) => d.sales));

export function SalesChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Sales Overview</h2>

      <div className="space-y-4">
        {chartData.map((data) => {
          const percentage = (data.sales / maxSales) * 100;

          return (
            <div key={data.month}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {data.month}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  ${data.sales.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}