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
        readOnly={readOnly}
        min="0"
        onKeyDown={(e) => e.key === "-" && e.preventDefault()}
        onPaste={(e) => {
          const pasted = e.clipboardData.getData("text");
          if (pasted.includes("-")) e.preventDefault();
        }}
        onChange={(e) => onAmountChange?.(e.target.value)}
      />
    </div>
  );
}
