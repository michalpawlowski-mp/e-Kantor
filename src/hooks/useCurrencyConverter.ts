import { useState } from "react";
import { Currency, Direction } from "@/types/currency";

type ConversionState = {
  value: number | null;
  error: string | null;
  currencyCode: string | null;
  direction: Direction | null;
};

export function useCurrencyConverter(selectedCurrency: Currency | null) {
  const [amount, setAmount] = useState("");
  const [direction, setDirection] = useState<Direction>("PLN_TO_CURRENCY");
  const [conversion, setConversion] = useState<ConversionState | null>(null);

  const isConversionValid =
    conversion &&
    conversion.currencyCode === selectedCurrency?.code &&
    conversion.direction === direction;

  const resultValue = isConversionValid ? conversion.value : null;
  const error = isConversionValid ? conversion.error : null;

  function convertCurrency() {
    if (!selectedCurrency) {
      setConversion({
        value: null,
        error: "Wybierz walutę",
        currencyCode: null,
        direction: null,
      });
      return;
    }

    const parsedAmount = parseFloat(amount);

    if (!amount || isNaN(parsedAmount)) {
      setConversion({
        value: null,
        error: "Wpisz kwotę",
        currencyCode: selectedCurrency.code,
        direction,
      });
      return;
    }

    if (parsedAmount <= 0) {
      setConversion({
        value: null,
        error: "Kwota musi być większa od zera",
        currencyCode: selectedCurrency.code,
        direction,
      });
      return;
    }

    setConversion({
      value:
        direction === "PLN_TO_CURRENCY"
          ? parsedAmount / selectedCurrency.mid
          : parsedAmount * selectedCurrency.mid,
      error: null,
      currencyCode: selectedCurrency.code,
      direction,
    });
  }

  return {
    amount,
    setAmount,
    direction,
    setDirection,
    resultValue,
    error,
    convertCurrency,
  };
}
