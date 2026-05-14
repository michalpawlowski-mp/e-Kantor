import { Currency } from "@/types/currency";

interface CurrencySelectProps {
  title: string;
  selectedCurrency: Currency | null;
  currencies: Currency[];
  onChange: (currency: Currency | null) => void;
}

export default function CurrencySelect({
  title,
  selectedCurrency,
  currencies,
  onChange,
}: CurrencySelectProps) {
  return (
    <select
      title={title}
      value={selectedCurrency?.code || ""}
      onChange={(e) => {
        const currency = currencies.find((c) => c.code === e.target.value);
        onChange(currency || null);
      }}
    >
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.code} — {currency.currency}
        </option>
      ))}
    </select>
  );
}
