export enum OrderStatus {
  PENDING = "PENDING",
  PLACED = "PLACED",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
}

export enum PaymentMethod {
  COD = "COD",
}

export interface IOrderCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ISellerUser {
  id: string;
  name: string;
  email: string;
}

export interface ISeller {
  id: string;
  shopName: string;
  shopAddress: string;
  shopPhone: string;
  user: ISellerUser;
}

export interface IOrderMedicine {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  dosageForm: string;
  strength: string;
}

export interface ISellerOrderItem {
  id: string;
  quantity: number;
  subtotal: number;
  medicine: IOrderMedicine;
}

export interface ISellerOrder {
  id: string;
  subtotal: number;
  seller: ISeller;
  items: ISellerOrderItem[];
}

export interface IOrder {
  id: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  shippingName: string;
  shippingPhone: string;
  shippingAddress: string;
  shippingCity: string;
  note?: string | null;
  createdAt: Date;
  updatedAt: Date;
  customer: IOrderCustomer;
  sellerOrders: ISellerOrder[];
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IOrderResponse {
  data: IOrder[];
  meta: IMeta;
}
