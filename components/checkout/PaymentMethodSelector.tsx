"use client";

import { CreditCard } from "lucide-react";

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const paymentOptions: PaymentOption[] = [
  {
    id: "vnpay",
    name: "VNPay",
    description:
      "Thanh toán qua VNPay - Hỗ trợ thẻ ATM, Visa, Mastercard, QR Code",
    icon: <CreditCard className="w-6 h-6 text-amber-500" />,
  },
];

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onSelectMethod: (methodId: string) => void;
}

export default function PaymentMethodSelector({
  selectedMethod,
  onSelectMethod,
}: PaymentMethodSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-6 h-6 text-gray-700" />
        <h2 className="text-xl font-bold text-gray-900">
          Chọn phương thức thanh toán
        </h2>
      </div>

      <div className="space-y-3">
        {paymentOptions.map((option) => {
          const isSelected = selectedMethod === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectMethod(option.id)}
              className={`
                w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all
                ${
                  isSelected
                    ? "border-amber-400 bg-amber-50/50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }
              `}
            >
              <div
                className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  ${isSelected ? "border-amber-400" : "border-gray-300"}
                `}
              >
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                )}
              </div>

              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  {option.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{option.name}</p>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
