"use client";

import { Package, Tag, Truck, CircleCheck } from "lucide-react";
import { cn } from "@/features/shared/utils/cn";
import type { NotificationType } from "../types/notification";

interface NotificationIconProps {
  readonly type: NotificationType;
}

const ICON_CONFIG: Record<
  NotificationType,
  {
    readonly icon: typeof Package;
    readonly bgClass: string;
    readonly iconClass: string;
  }
> = {
  order_confirmed: {
    icon: Package,
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  promotion: {
    icon: Tag,
    bgClass: "bg-orange-100",
    iconClass: "text-orange-500",
  },
  order_shipping: {
    icon: Truck,
    bgClass: "bg-orange-100",
    iconClass: "text-orange-500",
  },
  order_delivered: {
    icon: CircleCheck,
    bgClass: "bg-success/10",
    iconClass: "text-success",
  },
};

export function NotificationIcon({ type }: NotificationIconProps) {
  const config = ICON_CONFIG[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
        config.bgClass
      )}
    >
      <Icon className={cn("h-5 w-5", config.iconClass)} />
    </div>
  );
}
