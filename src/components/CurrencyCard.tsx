import { CurrencyCardProps } from "@/types/currency";
import { CURRENCY_SYMBOLS } from "@/constants/currencies";

export default function CurrencyCard({
  currency,
  isActive,
  onSelect,
}: CurrencyCardProps) {
  return (
    <div
      className={`currency-card ${isActive ? "active" : ""}`}
      onClick={() => onSelect(currency)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(currency)}
    >
      <div className="currency-card-header">
        <div className="currency-code">
          {CURRENCY_SYMBOLS[currency.code] && (
            <span className="currency-symbol">{CURRENCY_SYMBOLS[currency.code]}</span>
          )}
          {currency.code}
        </div>
        <div className="currency-info-wrapper">
          <button
            type="button"
            className="currency-info-btn"
            onClick={(e) => e.stopPropagation()}
          >
            i
          </button>
          <div className="currency-tooltip">
            za 1 {currency.currency} = {currency.mid.toFixed(4)} PLN
          </div>
        </div>
      </div>
      <div className="currency-rate">{currency.mid.toFixed(4)} PLN</div>
    </div>
  );
}
