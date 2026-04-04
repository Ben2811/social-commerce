"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/features/shared/utils/cn";
import type { Notification } from "../types/notification";
import { NotificationIcon } from "./NotificationIcon";

interface NotificationItemProps {
  readonly notification: Notification;
  readonly onDismiss: (id: string) => void;
  readonly onMarkAsRead: (id: string) => void;
}

export function NotificationItem({
  notification,
  onDismiss,
  onMarkAsRead,
}: NotificationItemProps) {
  return (
    <div
      className={cn(
        "group relative flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-sm",
        notification.isHighlighted && "border-orange-300 bg-orange-50/50"
      )}
    >
      <NotificationIcon type={notification.type} />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-card-foreground">
            {notification.title}
          </h3>
          <Button
            variant="ghost"
            size="icon-xs"
            className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => onDismiss(notification.id)}
            aria-label="Xóa thông báo"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {notification.description}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {notification.timeAgo}
          </span>

          {!notification.isRead && (
            <Button
              variant="outline"
              size="xs"
              className="border-orange-300 text-orange-500 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => onMarkAsRead(notification.id)}
            >
              Đánh dấu đã đọc
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
