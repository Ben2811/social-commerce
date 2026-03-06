"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Badge } from "@/components/admin/Badge";
import { Search, MoreVertical, Mail, Phone } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
  orders: number;
  totalSpent: number;
  joinDate: string;
}

const mockCustomers: Customer[] = [
  {
    id: "CUST001",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    status: "active",
    orders: 12,
    totalSpent: 2499.99,
    joinDate: "2023-01-15",
  },
  {
    id: "CUST002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 234-5678",
    status: "active",
    orders: 8,
    totalSpent: 1599.50,
    joinDate: "2023-02-20",
  },
  {
    id: "CUST003",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    status: "active",
    orders: 15,
    totalSpent: 3999.99,
    joinDate: "2022-11-10",
  },
  {
    id: "CUST004",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1 (555) 456-7890",
    status: "inactive",
    orders: 3,
    totalSpent: 599.99,
    joinDate: "2023-06-05",
  },
  {
    id: "CUST005",
    name: "Tom Brown",
    email: "tom@example.com",
    phone: "+1 (555) 567-8901",
    status: "active",
    orders: 20,
    totalSpent: 5299.99,
    joinDate: "2022-09-18",
  },
];

export default function CustomersPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 flex-1">
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
              <p className="text-gray-600 mt-1">
                Manage and view all your customers
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Add Customer
            </button>
          </div>

          <div className="bg-white rounded-lg shadow mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="bg-gray-50 flex-1 outline-none text-sm"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Orders
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Total Spent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {customer.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-gray-400" />
                          {customer.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-gray-400" />
                          {customer.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {customer.orders}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        ${customer.totalSpent.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            customer.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {customer.joinDate}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing 1 to 5 of {mockCustomers.length} customers
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                Previous
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}