"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { BarChart3, TrendingUp, Users, ShoppingCart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 flex-1">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">
              Track your business performance and metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Revenue"
              value="$125,430"
              change={28}
              icon={TrendingUp}
              bgColor="bg-green-100"
              textColor="text-green-600"
            />
            <StatsCard
              title="Avg Order Value"
              value="$156.50"
              change={5}
              icon={ShoppingCart}
              bgColor="bg-blue-100"
              textColor="text-blue-600"
            />
            <StatsCard
              title="Conversion Rate"
              value="3.24%"
              change={0.5}
              icon={BarChart3}
              bgColor="bg-purple-100"
              textColor="text-purple-600"
            />
            <StatsCard
              title="Customer Lifetime Value"
              value="$892"
              change={12}
              icon={Users}
              bgColor="bg-orange-100"
              textColor="text-orange-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Revenue by Category</h2>
              <div className="space-y-4">
                {[
                  { name: "Electronics", value: 45230, percentage: 45 },
                  { name: "Fashion", value: 32150, percentage: 32 },
                  { name: "Home & Garden", value: 18900, percentage: 19 },
                  { name: "Sports", value: 4320, percentage: 4 },
                ].map((category) => (
                  <div key={category.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      <span className="text-sm font-bold text-gray-900">${category.value.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Top Selling Products</h2>
              <div className="space-y-4">
                {[
                  { name: "Wireless Headphones", sales: 542 },
                  { name: "Smart Watch", sales: 438 },
                  { name: "Phone Case", sales: 392 },
                  { name: "USB-C Cable", sales: 287 },
                ].map((product) => (
                  <div key={product.name} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-b-0">
                    <span className="text-sm text-gray-700">{product.name}</span>
                    <span className="text-sm font-bold text-gray-900">{product.sales} sold</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}