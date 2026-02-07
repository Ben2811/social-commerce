"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { IMAGES } from "@/constants/images";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Áo thun basic trắng",
    price: 199000,
    image: IMAGES.PRODUCT,
    quantity: 2,
  },
  {
    id: 2,
    name: "Quần jean slim fit",
    price: 459000,
    image: IMAGES.PRODUCT,
    quantity: 1,
  },
  {
    id: 3,
    name: "Giày sneaker classic",
    price: 890000,
    image: IMAGES.PRODUCT,
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shippingFee;

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Tiếp tục mua sắm</span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Giỏ hàng
            <span className="text-sm font-normal text-gray-500">
              ({cartItems.length} sản phẩm)
            </span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Giỏ hàng trống
            </h2>
            <p className="text-gray-500 mb-6">
              Bạn chưa thêm sản phẩm nào vào giỏ hàng.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Khám phá sản phẩm
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 flex gap-4 sm:gap-6 hover:shadow-md transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/200x200?text=Product";
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                        {item.name}
                      </h3>
                      <p className="text-pink-600 font-bold text-lg mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Item Total & Remove */}
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-gray-900 hidden sm:block">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Tóm tắt đơn hàng
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển</span>
                    <span>
                      {shippingFee === 0 ? (
                        <span className="text-green-600 font-medium">
                          Miễn phí
                        </span>
                      ) : (
                        formatPrice(shippingFee)
                      )}
                    </span>
                  </div>
                  {shippingFee > 0 && (
                    <p className="text-xs text-gray-400">
                      Miễn phí vận chuyển cho đơn hàng từ{" "}
                      {formatPrice(500000)}
                    </p>
                  )}
                  <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-base">
                    <span>Tổng cộng</span>
                    <span className="text-pink-600 text-lg">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                  Thanh toán
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Thanh toán an toàn & bảo mật</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
