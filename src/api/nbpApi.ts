import { Currency } from "@/types/currency";

export async function fetchCurrencies(): Promise<Currency[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      "https://api.nbp.pl/api/exchangerates/tables/A/?format=json",
      { signal: controller.signal },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch currencies");
    }

    const data = await response.json();
    return data[0].rates;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("Przekroczono czas oczekiwania. Spróbuj ponownie.");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
