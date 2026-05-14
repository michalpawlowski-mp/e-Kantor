import { Currency } from "@/types/currency";

interface CurrencyCardProps {
  currency: Currency;
  isActive: boolean;
  onSelect: (currency: Currency) => void;
}

export default function CurrencyCard({
  currency,
  isActive,
  onSelect,
}: CurrencyCardProps) {
  return (
    <div
      className={`currency-card ${isActive ? "active" : ""}`}
      onClick={() => onSelect(currency)}
    >
      <div className="currency-code">{currency.code}</div>
      <div className="currency-rate">{currency.mid.toFixed(4)} PLN</div>
      <div className="currency-name">za 1 {currency.currency}</div>
    </div>
  );
}
