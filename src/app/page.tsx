"use client";

import CurrencyGrid from "@/components/CurrencyGrid";
import Converter from "@/components/Converter";
import { useCurrencies } from "@/hooks/useCurrencies";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import { POPULAR_CURRENCIES } from "@/constants/currencies";
import Footer from "@/components/Footer";

export default function Home() {
  const { currencies, selectedCurrency, setSelectedCurrency } = useCurrencies();

  const { amount, setAmount, direction, setDirection, result, convertCurrency } =
    useCurrencyConverter(selectedCurrency);

  const popularCurrencies = currencies.filter((currency) =>
    POPULAR_CURRENCIES.includes(currency.code),
  );

  return (
    <>
      <div className="container">
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
            result={result}
            onConvert={convertCurrency}
            direction={direction}
            setDirection={setDirection}
            setSelectedCurrency={setSelectedCurrency}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
