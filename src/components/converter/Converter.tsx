import { ConverterProps } from "@/types/currency";
import ConverterPanel from "../converter/ConverterPanel";
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
  const resultValue = result?.toFixed(2) ?? "";

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
      {result && selectedCurrency && (
        <div className="result">
          <div className="result-main">
            {isPlnToCurrency
              ? `${amount} PLN = ${result.toFixed(2)} ${selectedCurrency.code}`
              : `${amount} ${selectedCurrency.code} = ${result.toFixed(2)} PLN`}
          </div>
          <div className="result-rate">
            1 {selectedCurrency.code} = {selectedCurrency.mid.toFixed(4)} PLN
          </div>
        </div>
      )}
    </div>
  );
}
