import { Badge } from "./Badge";

interface Order {
  id: string;
  customer: string;
  amount: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  date: string;
}

const mockOrders: Order[] = [
  {
    id: "#ORD001",
    customer: "John Doe",
    amount: 299.99,
    status: "delivered",
    date: "2024-01-15",
  },
  {
    id: "#ORD002",
    customer: "Jane Smith",
    amount: 149.50,
    status: "shipped",
    date: "2024-01-14",
  },
  {
    id: "#ORD003",
    customer: "Mike Johnson",
    amount: 499.99,
    status: "processing",
    date: "2024-01-13",
  },
  {
    id: "#ORD004",
    customer: "Sarah Wilson",
    amount: 199.99,
    status: "pending",
    date: "2024-01-12",
  },
  {
    id: "#ORD005",
    customer: "Tom Brown",
    amount: 349.99,
    status: "delivered",
    date: "2024-01-11",
  },
];

const statusColors: Record<Order["status"], string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
};

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
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
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  ${order.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={statusColors[order.status]}>
                    {order.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}