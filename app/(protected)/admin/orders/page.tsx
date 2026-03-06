"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Badge } from "@/components/admin/Badge";
import { Search, Filter, Download } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  items: number;
}

const orders: Order[] = [
  {
    id: "#ORD001",
    customer: "John Doe",
    email: "john@example.com",
    amount: 299.99,
    status: "delivered",
    date: "2024-01-15",
    items: 3,
  },
  {
    id: "#ORD002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: 149.50,
    status: "shipped",
    date: "2024-01-14",
    items: 1,
  },
  {
    id: "#ORD003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    amount: 499.99,
    status: "processing",
    date: "2024-01-13",
    items: 5,
  },
  {
    id: "#ORD004",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    amount: 199.99,
    status: "pending",
    date: "2024-01-12",
    items: 2,
  },
  {
    id: "#ORD005",
    customer: "Tom Brown",
    email: "tom@example.com",
    amount: 349.99,
    status: "delivered",
    date: "2024-01-11",
    items: 4,
  },
  {
    id: "#ORD006",
    customer: "Emma Davis",
    email: "emma@example.com",
    amount: 599.99,
    status: "cancelled",
    date: "2024-01-10",
    items: 6,
  },
];

const statusColors: Record<Order["status"], string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 flex-1">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
            <p className="text-gray-600 mt-1">Manage and track all orders</p>
          </div>

          <div className="bg-white rounded-lg shadow mb-6 p-6">
            <div className="flex gap-4 items-center mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={20} />
                Export
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-blue-600">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div>{order.customer}</div>
                        <div className="text-xs text-gray-500">{order.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.items}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        ${order.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={statusColors[order.status]}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}