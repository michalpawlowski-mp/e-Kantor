"use client";

import CurrencyGrid from "@/components/CurrencyGrid";
import Converter from "@/components/Converter";
import { useCurrencies } from "@/hooks/useCurrencies";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { POPULAR_CURRENCIES } from "@/constants/currencies";
import Footer from "@/components/Footer";
import ErrorState from "@/components/ErrorState";
import LoadingState from "@/components/LoadingState";

export default function Home() {
  const { currencies, selectedCurrency, setSelectedCurrency, isLoading, error } =
    useCurrencies();

  const {
    amount,
    setAmount,
    direction,
    setDirection,
    resultValue,
    error: converterError,
    convertCurrency,
  } = useCurrencyConverter(selectedCurrency);

  if (isLoading) return <LoadingState />;

  if (error) return <ErrorState message={error} />;

  const popularCurrencies = currencies.filter((currency) =>
    POPULAR_CURRENCIES.includes(currency.code),
  );

  return (
    <>
      <main>
        <h1 className="title">NBP Konwerter walut</h1>
        <div className="section">
          <h2>Popularne Waluty</h2>
          <CurrencyGrid
            currencies={popularCurrencies}
            selectedCurrency={selectedCurrency}
            onSelect={setSelectedCurrency}
          />
        </div>
        <div className="section">
          <h2>Konwerter</h2>
          <Converter
            amount={amount}
            setAmount={setAmount}
            selectedCurrency={selectedCurrency}
            currencies={currencies}
            result={resultValue}
            error={converterError}
            onConvert={convertCurrency}
            direction={direction}
            setDirection={setDirection}
            setSelectedCurrency={setSelectedCurrency}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
