import { useEffect, useState } from "react";

import { fetchCurrencies } from "@/api/nbpApi";

import { Currency } from "@/types/currency";

export function useCurrencies() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null,
  );

  useEffect(() => {
    async function loadCurrencies() {
      try {
        const data = await fetchCurrencies();

        setCurrencies(data);
        setSelectedCurrency(data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    loadCurrencies();
  }, []);

  return {
    currencies,
    selectedCurrency,
    setSelectedCurrency,
  };
}
