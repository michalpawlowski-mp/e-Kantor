import { useEffect, useState } from "react";
import { fetchCurrencies } from "@/api/nbpApi";
import { Currency } from "@/types/currency";

export function useCurrencies() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCurrencies() {
      try {
        setIsLoading(true);

        const data = await fetchCurrencies();

        setCurrencies(data);

        setSelectedCurrency(data[0]);
      } catch {
        setError("Nie udało się pobrać kursów walut. Spróbuj odświeżyć stronę.");
      } finally {
        setIsLoading(false);
      }
    }
    loadCurrencies();
  }, []);

  return { currencies, selectedCurrency, setSelectedCurrency, isLoading, error };
}
