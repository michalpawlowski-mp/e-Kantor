import CurrencyCard from "./CurrencyCard";
import { Currency } from "@/types/currency";

interface CurrencyGridProps {
  currencies: Currency[];
  selectedCurrency: Currency | null;
  onSelect: (currency: Currency) => void;
}

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
