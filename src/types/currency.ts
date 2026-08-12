export interface Currency {
  code: string;
  currency: string;
  mid: number;
}

export type Direction = "PLN_TO_CURRENCY" | "CURRENCY_TO_PLN";

export interface CurrencyCardProps {
  currency: Currency;
  isActive: boolean;
  onSelect: (currency: Currency) => void;
}

export interface CurrencyGridProps {
  currencies: Currency[];
  selectedCurrency: Currency | null;
  onSelect: (currency: Currency) => void;
  onShowAll: () => void;
}

export interface CurrencySelectProps {
  title: string;
  selectedCurrency: Currency | null;
  currencies: Currency[];
  onChange: (currency: Currency | null) => void;
}

export interface CurrencyModalProps {
  currencies: Currency[];
  onClose: () => void;
}
