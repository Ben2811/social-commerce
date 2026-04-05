export type NotificationType = "order_confirmed" | "promotion" | "order_shipping" | "order_delivered";

export interface Notification {
  readonly id: string;
  readonly type: NotificationType;
  readonly title: string;
  readonly description: string;
  readonly timeAgo: string;
  readonly isRead: boolean;
  readonly isHighlighted?: boolean;
}
