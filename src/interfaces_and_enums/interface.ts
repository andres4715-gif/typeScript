interface Car {
  readonly brand: string;
  readonly model: string;
  readonly year?: number;
  readonly carSafetyRating: number;
}

interface additionalData {
  readonly location?: string;
  readonly carStatus: string;
}

export interface Seller extends Car, additionalData {
  readonly name: string;
  readonly reputation: string;

  showData(): string;
}

export type myCarInfo = {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly carSafetyRating: number;
  readonly location: string;
  readonly carStatus: string;
  readonly name: string;
  readonly reputation: string;
  readonly priority: string;
};

export enum dealerReputation {
  EXCELlENT = 'ExcelLent',
  GOOD = 'Good',
  BAD = 'Bad',
}

export enum clientPriority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export enum CarStatus {
  AVAILABLE = 'Available',
  NEGOTIATION = 'Negotiation',
  PENDING_PAYMENT = 'PendingPayment',
  SOLD = 'Sold',
  CANCELLED = 'Cancelled',
  RESERVED = 'Reserved',
  UNDER_REVIEW = 'UnderReview',
  DELIVERED = 'Delivered',
}

export enum CarSafetyRating {
  UNSAFE,
  BELOW_AVERAGE,
  AVERAGE,
  SAFE,
  VERY_SAFE,
}
