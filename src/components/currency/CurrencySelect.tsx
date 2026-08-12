import { CurrencySelectProps } from "@/types/currency";

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
