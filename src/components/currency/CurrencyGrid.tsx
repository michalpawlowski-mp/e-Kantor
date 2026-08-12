import CurrencyCard from "./CurrencyCard";
import { CurrencyGridProps } from "@/types/currency";

export default function CurrencyGrid({
  currencies,
  selectedCurrency,
  onSelect,
  onShowAll,
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
      <button type="button" className="currency-grid-show-all" onClick={onShowAll}>
        <span className="currency-grid-show-all-text">Pokaż wszystkie kursy</span>
        <span className="currency-grid-show-all-sub">32 waluty NBP</span>
      </button>
    </div>
  );
}
