import type { Order } from "../types/order";

export const MOCK_ORDER: Order = {
  id: "69ceb0ccc93370232c5a74af",
  status: "pending",
  createdAt: "2026-03-04T01:09:00Z",
  updatedAt: "2026-03-04T01:09:00Z",
  totalAmount: 29241.9,
  items: [
    {
      id: "item-1",
      productId: "69c8ef25ff8ea5ac0498993b",
      sku: "SKU-00099974",
      quantity: 30,
      price: 974.73,
    },
  ],
  shippingAddress: {
    street: "133/2/4 Bình thới",
    ward: "11, Tphcm",
    district: "",
    city: "700000",
    postalCode: "",
    country: "Vietnam",
  },
};
