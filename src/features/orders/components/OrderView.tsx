"use client";

import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MOCK_ORDER } from "../constants/mock-data";
import { OrderStatusStepper } from "./OrderStatusStepper";
import { OrderStatusBadge } from "./OrderStatusBadge";

const STATUS_LABELS: Record<string, string> = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  shipping: "Đang giao",
  delivered: "Đã giao",
  cancelled: "Đã hủy",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
    .format(amount)
    .replace("₫", "VND");
}

export function OrderView() {
  const order = MOCK_ORDER;

  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto w-full max-w-[1280px] px-10 py-8">
        <div className="mx-auto w-full max-w-[900px]">
          {/* Back button */}
          <Link
            href="/profile"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Profile
          </Link>

          {/* Order Header Card */}
          <Card className="mb-4">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Đơn hàng #{order.id}
                  </CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Đặt hàng vào {formatDate(order.createdAt)}
                  </p>
                </div>
                <OrderStatusBadge status={order.status} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground">Tổng cộng</p>
                  <p className="mt-0.5 text-base font-semibold text-foreground">
                    {formatCurrency(order.totalAmount)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Số lượng sản phẩm</p>
                  <p className="mt-0.5 text-base font-semibold text-foreground">
                    {totalItems}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Cập nhật lần cuối</p>
                  <p className="mt-0.5 text-base font-semibold text-foreground">
                    {formatDateShort(order.updatedAt)}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              {order.status === "pending" && (
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive" size="sm">
                    Hủy đơn hàng
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                    Liên hệ hỗ trợ
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Order Status Card */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Trạng thái đơn hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderStatusStepper currentStatus={order.status} />
            </CardContent>
          </Card>

          {/* Products Card */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Sản phẩm trong đơn hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
                  >
                    <div>
                      <p className="text-sm text-foreground">
                        ID sản phẩm:{" "}
                        <span className="font-medium">{item.productId}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        SKU: {item.sku}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Số lượng:</p>
                      <p className="text-sm font-semibold text-foreground">
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom grid: Shipping address + Order info */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Địa chỉ giao hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{order.shippingAddress.street}</p>
                  {order.shippingAddress.ward && (
                    <p>{order.shippingAddress.ward}</p>
                  )}
                  {order.shippingAddress.city && (
                    <p>{order.shippingAddress.city}</p>
                  )}
                  <p>{order.shippingAddress.country}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Info Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Thông tin đơn hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trạng thái hiện tại:</span>
                    <span className="font-medium text-foreground">
                      {STATUS_LABELS[order.status] ?? order.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ngày tạo:</span>
                    <span className="font-medium text-foreground">
                      {formatDate(order.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cập nhật gần nhất:</span>
                    <span className="font-medium text-foreground">
                      {formatDate(order.updatedAt)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tổng tiền:</span>
                    <span className="font-bold text-foreground">
                      {formatCurrency(order.totalAmount)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
