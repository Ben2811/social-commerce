import type { Notification } from "../types/notification";

export const MOCK_NOTIFICATIONS: ReadonlyArray<Notification> = [
  {
    id: "1",
    type: "order_confirmed",
    title: "Đơn hàng đã được xác nhận",
    description:
      "Đơn hàng #ORD123 của bạn đã được xác nhận và đang được chuẩn bị. Dự kiến giao hàng trong 2-3 ngày",
    timeAgo: "5 phút trước",
    isRead: true,
  },
  {
    id: "2",
    type: "promotion",
    title: "Flash Sale 50% - Chỉ còn 2 giờ! 🔥",
    description:
      "Siêu sale công nghệ giảm đến 50%. Đừng bỏ lỡ cơ hội sở hữu Laptop MacBook Pro với giá ưu đãi",
    timeAgo: "1 giờ trước",
    isRead: false,
    isHighlighted: true,
  },
  {
    id: "3",
    type: "order_shipping",
    title: "Đơn hàng đang được giao",
    description:
      "Đơn hàng #ORD098 của bạn đang trên đường giao đến. Tài xế Nguyễn Văn A - SĐT: 091234567",
    timeAgo: "2 giờ trước",
    isRead: true,
  },
  {
    id: "4",
    type: "order_delivered",
    title: "Đơn hàng giao thành công",
    description:
      "Đơn hàng #ORD076 đã được giao thành công. Cảm ơn bạn đã mua sắm tại S-Commerce",
    timeAgo: "1 ngày trước",
    isRead: true,
  },
  {
    id: "5",
    type: "promotion",
    title: "Giảm giá đặc biệt cho thành viên mới! 🎉",
    description:
      "Chào mừng bạn đến với S-Commerce! Nhận ngay voucher giảm 20% cho đơn hàng đầu tiên",
    timeAgo: "2 ngày trước",
    isRead: true,
  },
  {
    id: "6",
    type: "order_confirmed",
    title: "Đơn hàng đã được xác nhận",
    description:
      "Đơn hàng #ORD065 của bạn đã được xác nhận. Sản phẩm sẽ được gửi đi trong hôm nay",
    timeAgo: "3 ngày trước",
    isRead: true,
  },
  {
    id: "7",
    type: "order_delivered",
    title: "Đơn hàng giao thành công",
    description:
      "Đơn hàng #ORD050 đã được giao thành công. Đánh giá sản phẩm để nhận xu thưởng!",
    timeAgo: "5 ngày trước",
    isRead: true,
  },
  {
    id: "8",
    type: "order_shipping",
    title: "Đơn hàng đang được giao",
    description:
      "Đơn hàng #ORD045 đang trên đường giao đến bạn. Vui lòng giữ liên lạc với tài xế",
    timeAgo: "1 tuần trước",
    isRead: true,
  },
] as const;
