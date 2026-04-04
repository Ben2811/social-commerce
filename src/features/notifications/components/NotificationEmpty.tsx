"use client";

import { BellOff } from "lucide-react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

export function NotificationEmpty() {
  return (
    <Empty className="py-16">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BellOff />
        </EmptyMedia>
        <EmptyTitle>Không có thông báo</EmptyTitle>
        <EmptyDescription>
          Bạn đã đọc tất cả thông báo. Chúng tôi sẽ thông báo khi có tin mới!
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
