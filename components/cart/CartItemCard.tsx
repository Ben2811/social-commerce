import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/utils/cart";
import { formatPrice } from "@/utils/format";

// Props cho component CartItemCard
interface CartItemCardProps {
  item: CartItem; // Thông tin sản phẩm trong giỏ hàng
  onUpdateQuantity: (id: number, delta: number) => void; // Hàm tăng/giảm số lượng (delta = +1 hoặc -1)
  onRemove: (id: number) => void; // Hàm xóa sản phẩm khỏi giỏ hàng
}

// Card hiển thị từng sản phẩm trong giỏ hàng với ảnh, tên, giá và điều chỉnh số lượng
export default function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemCardProps) {
  return (
    // Card bao ngoài với hiệu ứng shadow khi hover
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 flex gap-4 sm:gap-6 hover:shadow-md transition-shadow">
      {/* Ảnh sản phẩm với fallback nếu ảnh lỗi */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          onError={(e) => {
            // Hiển thị ảnh placeholder nếu ảnh gốc không tải được
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/200x200?text=Product";
          }}
        />
      </div>

      {/* Thông tin và điều khiển sản phẩm */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        {/* Tên và giá đơn vị sản phẩm */}
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
            {item.name}
          </h3>
          <p className="text-pink-600 font-bold text-lg mt-1">
            {formatPrice(item.price)}
          </p>
        </div>

        {/* Thanh điều chỉnh số lượng và nút xóa */}
        <div className="flex items-center justify-between mt-3">
          {/* Bộ điều chỉnh số lượng: nút giảm, số lượng hiện tại, nút tăng */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
            {/* Nút giảm số lượng */}
            <button
              onClick={() => onUpdateQuantity(item.id, -1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
            >
              <Minus className="w-4 h-4" />
            </button>
            {/* Hiển thị số lượng hiện tại */}
            <span className="w-8 text-center font-semibold text-gray-900">
              {item.quantity}
            </span>
            {/* Nút tăng số lượng */}
            <button
              onClick={() => onUpdateQuantity(item.id, 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Tổng tiền của sản phẩm (giá × số lượng), chỉ hiện trên màn hình lớn */}
            <span className="font-bold text-gray-900 hidden sm:block">
              {formatPrice(item.price * item.quantity)}
            </span>
            {/* Nút xóa sản phẩm khỏi giỏ hàng */}
            <button
              onClick={() => onRemove(item.id)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
