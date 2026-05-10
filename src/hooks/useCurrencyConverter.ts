import { useState } from "react";
import { Currency, Direction } from "@/types/currency";

export function useCurrencyConverter(selectedCurrency: Currency | null) {
  const [amount, setAmount] = useState("");
  const [direction, setDirection] = useState<Direction>("PLN_TO_CURRENCY");
  const [result, setResult] = useState("");

  function convertCurrency() {
    if (!amount || !selectedCurrency) return;

    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    if (direction === "PLN_TO_CURRENCY") {
      setResult(
        `${amount} PLN = ${(parsedAmount / selectedCurrency.mid).toFixed(2)} ${selectedCurrency.code}`,
      );
    } else {
      setResult(
        `${amount} ${selectedCurrency.code} = ${(parsedAmount * selectedCurrency.mid).toFixed(2)} PLN`,
      );
    }
  }

  return {
    amount,
    setAmount,
    direction,
    setDirection,
    result,
    convertCurrency,
  };
}
