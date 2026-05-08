import { Currency } from "@/types/currency";

export async function fetchCurrencies(): Promise<Currency[]> {
  const response = await fetch(
    "https://api.nbp.pl/api/exchangerates/tables/A/?format=json",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch currencies");
  }

  const data = await response.json();

  return data[0].rates;
}
