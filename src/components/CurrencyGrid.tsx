import CurrencyCard from "./CurrencyCard";
import { CurrencyGridProps } from "@/types/currency";

export default function CurrencyGrid({
  currencies,
  selectedCurrency,
  onSelect,
}: CurrencyGridProps) {
  return (
    <div className="currency-grid">
      {currencies.map((currency) => (
        <CurrencyCard
          key={currency.code}
          currency={currency}
          isActive={selectedCurrency?.code === currency.code}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
