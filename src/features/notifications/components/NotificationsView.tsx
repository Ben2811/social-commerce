"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/features/shared/utils/cn";
import type { Notification } from "../types/notification";
import { MOCK_NOTIFICATIONS } from "../constants/mock-data";
import { NotificationItem } from "./NotificationItem";
import { NotificationEmpty } from "./NotificationEmpty";

type TabType = "all" | "unread";

export function NotificationsView() {
  const [notifications, setNotifications] = useState<Notification[]>([
    ...MOCK_NOTIFICATIONS,
  ]);
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const unreadCount = useMemo(
    () => notifications.filter((n: Notification) => !n.isRead).length,
    [notifications]
  );

  const filteredNotifications = useMemo(
    (): Notification[] =>
      activeTab === "unread"
        ? notifications.filter((n: Notification) => !n.isRead)
        : notifications,
    [notifications, activeTab]
  );

  const handleDismiss = useCallback((id: string) => {
    setNotifications((prev: Notification[]) =>
      prev.filter((n: Notification) => n.id !== id)
    );
  }, []);

  const handleMarkAsRead = useCallback((id: string) => {
    setNotifications((prev: Notification[]) =>
      prev.map((n: Notification) =>
        n.id === id ? { ...n, isRead: true, isHighlighted: false } : n
      )
    );
  }, []);

  const handleMarkAllAsRead = useCallback(() => {
    setNotifications((prev: Notification[]) =>
      prev.map((n: Notification) => ({
        ...n,
        isRead: true,
        isHighlighted: false,
      }))
    );
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto w-full max-w-[1280px] px-10 py-8">
        <div className="mx-auto w-full max-w-[900px]">
          {/* Header */}
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-foreground">Thông báo</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Bạn có {unreadCount} thông báo chưa đọc
            </p>
          </div>

          <Separator className="my-4" />

          {/* Tabs & Action bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant={activeTab === "all" ? "orange" : "outline"}
                size="sm"
                className={cn(
                  "transition-all",
                  activeTab === "all" && "shadow-sm"
                )}
                onClick={() => setActiveTab("all")}
              >
                Tất cả
                <Badge
                  variant={activeTab === "all" ? "secondary" : "outline"}
                  className="ml-1"
                >
                  {notifications.length}
                </Badge>
              </Button>

              <Button
                variant={activeTab === "unread" ? "orange" : "outline"}
                size="sm"
                className={cn(
                  "transition-all",
                  activeTab === "unread" && "shadow-sm"
                )}
                onClick={() => setActiveTab("unread")}
              >
                Chưa đọc
                <Badge
                  variant={activeTab === "unread" ? "secondary" : "outline"}
                  className="ml-1"
                >
                  {unreadCount}
                </Badge>
              </Button>
            </div>

            {unreadCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="border-orange-300 text-orange-500 hover:bg-orange-50 hover:text-orange-600"
                onClick={handleMarkAllAsRead}
              >
                Đánh dấu đã đọc tất cả
              </Button>
            )}
          </div>

          {/* Notification list */}
          <div className="flex flex-col gap-3">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(
                (notification: Notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onDismiss={handleDismiss}
                    onMarkAsRead={handleMarkAsRead}
                  />
                )
              )
            ) : (
              <NotificationEmpty />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
