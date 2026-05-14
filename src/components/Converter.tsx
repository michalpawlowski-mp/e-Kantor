import { Currency, Direction } from "@/types/currency";

interface ConverterProps {
  amount: string;
  setAmount: (value: string) => void;
  selectedCurrency: Currency | null;
  currencies: Currency[];
  result: string;
  onConvert: () => void;
  direction: Direction;
  setDirection: (direction: Direction) => void;
  setSelectedCurrency: (currency: Currency | null) => void;
}

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

  function handleSwap() {
    setDirection(isPlnToCurrency ? "CURRENCY_TO_PLN" : "PLN_TO_CURRENCY");
  }

  return (
    <div className="converter">
      <div className="converter-panels">
        {/* Panel lewy */}
        <div className="converter-panel">
          <div className="panel-label">Z WALUTY</div>
          {isPlnToCurrency ? (
            <div className="panel-currency-fixed">
              <span className="flag">🇵🇱</span>
              <span className="currency-code-fixed">PLN</span>
            </div>
          ) : (
            <select
              title="Wybierz walutę źródłową"
              value={selectedCurrency?.code || ""}
              onChange={(e) => {
                const currency = currencies.find((c) => c.code === e.target.value);
                setSelectedCurrency(currency || null);
              }}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} — {currency.currency}
                </option>
              ))}
            </select>
          )}
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Przycisk swap */}
        <button
          type="button"
          className="swap-btn"
          onClick={handleSwap}
          aria-label="Zamień kierunek"
        >
          ⇄
        </button>

        {/* Panel prawy */}
        <div className="converter-panel">
          <div className="panel-label">NA WALUTĘ</div>
          {isPlnToCurrency ? (
            <select
              title="Wybierz walutę docelową"
              value={selectedCurrency?.code || ""}
              onChange={(e) => {
                const currency = currencies.find((c) => c.code === e.target.value);
                setSelectedCurrency(currency || null);
              }}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} — {currency.currency}
                </option>
              ))}
            </select>
          ) : (
            <div className="panel-currency-fixed">
              <span className="flag">🇵🇱</span>
              <span className="currency-code-fixed">PLN</span>
            </div>
          )}
          <input
            type="number"
            placeholder="0"
            value={result.match(/[\d.,]+(?=\s*(PLN|[A-Z]{3})\s*$)/)?.[0] || ""}
            readOnly
          />
        </div>
      </div>

      <button type="button" className="convert-btn" onClick={onConvert}>
        Przelicz
      </button>

      {result && <div className="result">{result}</div>}
    </div>
  );
}
