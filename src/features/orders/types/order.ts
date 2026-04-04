export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  readonly id: string;
  readonly productId: string;
  readonly sku: string;
  readonly quantity: number;
  readonly price: number;
}

export interface ShippingAddress {
  readonly street: string;
  readonly ward: string;
  readonly district: string;
  readonly city: string;
  readonly postalCode: string;
  readonly country: string;
}

export interface Order {
  readonly id: string;
  readonly status: OrderStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly totalAmount: number;
  readonly items: ReadonlyArray<OrderItem>;
  readonly shippingAddress: ShippingAddress;
}
