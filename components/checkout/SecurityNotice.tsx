"use client";

import { ShieldCheck } from "lucide-react";

export default function SecurityNotice() {
  return (
    <div className="mt-8 border-2 border-dashed border-amber-300 rounded-xl p-5 bg-amber-50/30">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-gray-600 leading-relaxed">
          Tất cả các phương thức thanh toán đều được bảo mật bằng mã hóa theo
          tiêu chuẩn ngành. Thông tin thanh toán của bạn không bao giờ được lưu
          trữ trên máy chủ của chúng tôi.
        </p>
      </div>
    </div>
  );
}
