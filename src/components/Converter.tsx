import { Currency, Direction } from "@/types/currency";
import DirectionButtons from "./DirectionButtons";

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
  return (
    <div className="converter">
      <DirectionButtons direction={direction} onChange={setDirection} />
      <input
        type="number"
        placeholder={
          direction === "PLN_TO_CURRENCY"
            ? "Wprowadź kwotę w PLN"
            : "Wprowadź kwotę w walucie"
        }
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        title="Choose currency"
        value={selectedCurrency?.code || ""}
        onChange={(e) => {
          const currency = currencies.find((c) => c.code === e.target.value);
          setSelectedCurrency(currency || null);
        }}
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.currency}
          </option>
        ))}
      </select>
      <button type="button" onClick={onConvert}>
        Przelicz
      </button>
      {result && <div className="result">{result}</div>}
    </div>
  );
}
