"use client";

import {
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
} from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { SalesChart } from "@/components/admin/SalesChart";
import { RecentOrders } from "@/components/admin/RecentOrders";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 flex-1">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back! Heres what&apos;s happening with your business today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Orders"
              value="1,234"
              change={12}
              icon={ShoppingCart}
              bgColor="bg-blue-100"
              textColor="text-blue-600"
            />
            <StatsCard
              title="Total Products"
              value="456"
              change={8}
              icon={Package}
              bgColor="bg-green-100"
              textColor="text-green-600"
            />
            <StatsCard
              title="Total Customers"
              value="2,890"
              change={15}
              icon={Users}
              bgColor="bg-purple-100"
              textColor="text-purple-600"
            />
            <StatsCard
              title="Revenue"
              value="$45,230"
              change={22}
              icon={TrendingUp}
              bgColor="bg-orange-100"
              textColor="text-orange-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <SalesChart />
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Add New Product
                </button>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  View All Orders
                </button>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  Manage Customers
                </button>
                <button className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-medium">
                  View Analytics
                </button>
              </div>
            </div>
          </div>

          <RecentOrders />
        </div>
      </div>
    </div>
  );
}