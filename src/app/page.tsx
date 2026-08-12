"use client";

import { useState } from "react";
import CurrencyGrid from "@/components/currency/CurrencyGrid";
import Converter from "@/components/converter/Converter";
import { useCurrencies } from "@/hooks/useCurrencies";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { POPULAR_CURRENCIES } from "@/constants/currencies";
import Footer from "@/components/ui/Footer";
import ErrorState from "@/components/ui/ErrorState";
import LoadingState from "@/components/ui/LoadingState";
import CurrencyModal from "@/components/currency/CurrencyModal";

export default function Home() {
  const { currencies, selectedCurrency, setSelectedCurrency, isLoading, error } =
    useCurrencies();

  const [showAllCurrencies, setShowAllCurrencies] = useState(false);

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
        <h1>NBP Konwerter walut</h1>
        <section>
          <h2>Popularne Waluty</h2>
          <CurrencyGrid
            currencies={popularCurrencies}
            selectedCurrency={selectedCurrency}
            onSelect={setSelectedCurrency}
            onShowAll={() => setShowAllCurrencies(true)}
          />
        </section>
        <section>
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
        </section>
      </main>
      <Footer />
      {showAllCurrencies && (
        <CurrencyModal
          currencies={currencies}
          onClose={() => setShowAllCurrencies(false)}
        />
      )}
    </>
  );
}
