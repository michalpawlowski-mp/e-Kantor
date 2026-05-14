import { Currency } from "@/types/currency";
import CurrencySelect from "./CurrencySelect";
import BadgePLN from "./BadgePLN";

interface ConverterPanelProps {
  label: string;
  showPLN: boolean;
  value: string;
  readOnly?: boolean;
  selectedCurrency: Currency | null;
  currencies: Currency[];
  onAmountChange?: (value: string) => void;
  onCurrencyChange: (currency: Currency | null) => void;
}

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
        onChange={(e) => onAmountChange?.(e.target.value)}
      />
    </div>
  );
}
