import { Currency, Direction } from "./currency";

export interface ConverterPanelProps {
  label: string;
  showPLN: boolean;
  value: string;
  readOnly?: boolean;
  selectedCurrency: Currency | null;
  currencies: Currency[];
  onAmountChange?: (value: string) => void;
  onCurrencyChange: (currency: Currency | null) => void;
}

export interface ConverterProps {
  amount: string;
  setAmount: (value: string) => void;
  selectedCurrency: Currency | null;
  currencies: Currency[];
  result: number | null;
  error: string | null;
  onConvert: () => void;
  direction: Direction;
  setDirection: (direction: Direction) => void;
  setSelectedCurrency: (currency: Currency | null) => void;
}
