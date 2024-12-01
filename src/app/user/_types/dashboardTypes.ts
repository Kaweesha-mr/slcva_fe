// Represents the donation history of a user. (for recent donations component in dahboard)

import { OrderStatus } from '@/app/constants/orderStatus';

export type donationHistory = {
  id: string;
  name: string;
  date: string;
  amount: number;
  photo?: string | null;
  isAnonymous: boolean;
};

// Represents the progress of a donation. (for donation progress component in dahboard)

export type donationProgress = {
  id: string;
  name: string;
  percentage: number;
  daysLeft: number;
};

export interface Order {
  id: string;
  medication_name: string;
  medication_dosage: string;
  quantity: number;
  importer: string;
  price: Number;
  order_status: OrderStatus;
}
