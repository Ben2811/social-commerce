"use client";

interface Step {
  number: number;
  label: string;
}

const steps: Step[] = [
  { number: 1, label: "Chọn giỏ hàng" },
  { number: 2, label: "Thông tin đặt hàng" },
  { number: 3, label: "Thanh toán" },
  { number: 4, label: "Đặt thành công" },
];

interface CheckoutStepperProps {
  currentStep: number;
}

export default function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
  return (
    <div className="flex items-center justify-center gap-30 w-full max-w-2xl mx-auto py-6">
      {steps.map((step) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;
        const isPending = step.number > currentStep;

        return (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                  ${
                    isCompleted
                      ? "bg-amber-400 text-white"
                      : isActive
                      ? "bg-amber-400 text-white ring-4 ring-amber-100"
                      : "border-2 border-gray-300 text-gray-400 bg-white"
                  }
                `}
              >
                <span className="text-base">{step.number}</span>
              </div>
              <span
                className={`text-xs text-center whitespace-nowrap font-medium ${
                  isPending ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {step.label}
              </span>
            </div>

          </div>
        );
      })}
    </div>
  );
}
