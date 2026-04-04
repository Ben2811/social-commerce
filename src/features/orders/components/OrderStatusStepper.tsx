"use client";

import { Clock, Check, Truck, Package } from "lucide-react";
import { cn } from "@/features/shared/utils/cn";
import type { OrderStatus } from "../types/order";

interface OrderStatusStepperProps {
  readonly currentStatus: OrderStatus;
}

interface StatusStep {
  readonly key: OrderStatus;
  readonly label: string;
  readonly description: string;
  readonly icon: typeof Clock;
}

const STATUS_STEPS: ReadonlyArray<StatusStep> = [
  {
    key: "pending",
    label: "Chờ xác nhận",
    description: "Đơn hàng vừa được tạo",
    icon: Clock,
  },
  {
    key: "confirmed",
    label: "Đã xác nhận",
    description: "Đơn hàng đã được xác nhận",
    icon: Check,
  },
  {
    key: "shipping",
    label: "Đang giao",
    description: "Đơn hàng đang được vận chuyển",
    icon: Truck,
  },
  {
    key: "delivered",
    label: "Đã giao",
    description: "Đơn hàng đã được giao thành công",
    icon: Package,
  },
];

const STATUS_ORDER: ReadonlyArray<OrderStatus> = [
  "pending",
  "confirmed",
  "shipping",
  "delivered",
];

function getStepIndex(status: OrderStatus): number {
  const idx = STATUS_ORDER.indexOf(status);
  return idx === -1 ? 0 : idx;
}

export function OrderStatusStepper({ currentStatus }: OrderStatusStepperProps) {
  const currentIndex = getStepIndex(currentStatus);

  return (
    <div className="flex items-start justify-between w-full">
      {STATUS_STEPS.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const Icon = step.icon;

        return (
          <div
            key={step.key}
            className="flex flex-1 flex-col items-center relative"
          >
            {/* Connector line */}
            {index < STATUS_STEPS.length - 1 && (
              <div
                className={cn(
                  "absolute top-5 left-1/2 w-full h-0.5",
                  isCompleted ? "bg-orange-400" : "bg-border"
                )}
                style={{ zIndex: 0 }}
              />
            )}

            {/* Icon circle */}
            <div
              className={cn(
                "relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all",
                isCurrent
                  ? "bg-destructive text-white shadow-lg"
                  : isCompleted
                    ? "bg-muted text-muted-foreground"
                    : "bg-muted/50 text-muted-foreground/40"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>

            {/* Labels */}
            <div className="mt-2 text-center px-1">
              <p
                className={cn(
                  "text-xs font-medium",
                  isCurrent
                    ? "text-foreground"
                    : isCompleted
                      ? "text-foreground/70"
                      : "text-muted-foreground"
                )}
              >
                {step.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-tight">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
