import { ConverterProps } from "@/types/currency";
import ConverterPanel from "./ConverterPanel";
import SwapButton from "./SwapButton";

export default function Converter({
  amount,
  setAmount,
  selectedCurrency,
  currencies,
  result,
  onConvert,
  direction,
  setDirection,
  setSelectedCurrency,
}: ConverterProps) {
  const isPlnToCurrency = direction === "PLN_TO_CURRENCY";
  const resultValue = result?.match(/[\d.,]+(?=\s*(PLN|[A-Z]{3})\s*$)/)?.[0] || "";

  function handleSwap() {
    setDirection(isPlnToCurrency ? "CURRENCY_TO_PLN" : "PLN_TO_CURRENCY");
  }

  return (
    <div className="converter">
      <div className="converter-panels">
        <ConverterPanel
          label="Z WALUTY"
          showPLN={isPlnToCurrency}
          value={amount}
          selectedCurrency={selectedCurrency}
          currencies={currencies}
          onAmountChange={setAmount}
          onCurrencyChange={setSelectedCurrency}
        />
        <SwapButton onClick={handleSwap} />
        <ConverterPanel
          label="NA WALUTĘ"
          showPLN={!isPlnToCurrency}
          value={resultValue}
          readOnly
          selectedCurrency={selectedCurrency}
          currencies={currencies}
          onCurrencyChange={setSelectedCurrency}
        />
      </div>
      <button type="button" className="convert-btn" onClick={onConvert}>
        Przelicz
      </button>
      {result && <div className="result">{result}</div>}
    </div>
  );
}
