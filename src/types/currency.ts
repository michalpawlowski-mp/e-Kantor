export interface Currency {
  code: string;
  currency: string;
  mid: number;
}

export type Direction = "PLN_TO_CURRENCY" | "CURRENCY_TO_PLN";
