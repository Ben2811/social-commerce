export interface CreateVnpayPaymentPayload {
  orderId: string;
  bankCode?: string;
  language?: 'vn' | 'en';
}

interface ApiResponse<T> {
  status: number;
  success: boolean;
  data: T;
  message?: string;
}

interface CreateVnpayPaymentResult {
  paymentUrl: string;
  orderId: string;
  amount: number;
}

function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
}

export async function createVnpayPaymentUrl(
  payload: CreateVnpayPaymentPayload,
  accessToken?: string,
): Promise<CreateVnpayPaymentResult> {
  const response = await fetch(
    `${getApiBaseUrl()}/api/payments/vnpay/create-payment-url`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      body: JSON.stringify(payload),
    },
  );

  const json = (await response.json()) as ApiResponse<CreateVnpayPaymentResult>;

  if (!response.ok || !json?.success || !json?.data?.paymentUrl) {
    throw new Error(json?.message || 'Không tạo được link thanh toán VNPay');
  }

  return json.data;
}
