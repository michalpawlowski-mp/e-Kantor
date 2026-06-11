import { ConverterPanelProps } from "@/types/currency";
import CurrencySelect from "./CurrencySelect";
import BadgePLN from "./BadgePLN";

export default function ConverterPanel({
  label,
  showPLN,
  value,
  readOnly = false,
  selectedCurrency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}: ConverterPanelProps) {
  return (
    <div className="converter-panel">
      <div className="panel-label">{label}</div>
      {showPLN ? (
        <BadgePLN />
      ) : (
        <CurrencySelect
          title={`Wybierz walutę — ${label.toLowerCase()}`}
          selectedCurrency={selectedCurrency}
          currencies={currencies}
          onChange={onCurrencyChange}
        />
      )}
      <input
        type="number"
        placeholder="0"
        value={value}
        min="0"
        readOnly={readOnly}
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "e") {
            e.preventDefault();
          }
        }}
        onChange={(e) => onAmountChange?.(e.target.value)}
      />
    </div>
  );
}
