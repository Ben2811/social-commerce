"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import PaymentMethodSelector from "@/components/checkout/PaymentMethodSelector";
import SecurityNotice from "@/components/checkout/SecurityNotice";

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("vnpay");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CheckoutStepper currentStep={3} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Quay lại</span>
        </button>

        <PaymentMethodSelector
          selectedMethod={selectedPaymentMethod}
          onSelectMethod={setSelectedPaymentMethod}
        />

        <SecurityNotice />

        <button
          disabled={!selectedPaymentMethod}
          className="w-full mt-8 bg-amber-400 hover:bg-amber-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3.5 rounded-full font-semibold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Tiếp tục thanh toán
        </button>
      </div>
    </div>
  );
}
