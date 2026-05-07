"use client";

import { useEffect, useState } from "react";

const POPULARNE = ["USD", "EUR", "GBP", "CHF", "JPY"];

interface Waluta {
  code: string;
  currency: string;
  mid: number;
}

export default function Home() {
  const [kursy, setKursy] = useState<Waluta[]>([]);
  const [wybranaWaluta, setWybranaWaluta] = useState<Waluta | null>(null);
  const [kwota, setKwota] = useState("");
  const [kierunek, setKierunek] = useState<"PLN_NA_WALUTE" | "WALUTA_NA_PLN">(
    "PLN_NA_WALUTE",
  );
  const [wynik, setWynik] = useState("");

  useEffect(() => {
    fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .then((res) => {
        if (!res.ok) throw new Error("Błąd pobierania kursów");
        return res.json();
      })
      .then((data) => {
        setKursy(data[0].rates);
        setWybranaWaluta(data[0].rates[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const popularneWaluty = kursy.filter((w) => POPULARNE.includes(w.code));

  const przelicz = () => {
    if (!kwota || !wybranaWaluta) return;
    const liczba = parseFloat(kwota);
    if (isNaN(liczba) || liczba <= 0) return;
    if (kierunek === "PLN_NA_WALUTE") {
      setWynik(
        `${kwota} PLN = ${(liczba / wybranaWaluta.mid).toFixed(2)} ${wybranaWaluta.code}`,
      );
    } else {
      setWynik(
        `${kwota} ${wybranaWaluta.code} = ${(liczba * wybranaWaluta.mid).toFixed(2)} PLN`,
      );
    }
  };

  const wybierzPopularna = (waluta: Waluta) => {
    setWybranaWaluta(waluta);
  };
  return (
    <div className="container">
      <h1 className="title">Przelicznik walut NBP</h1>

      <div className="section">
        <h2>Popularne waluty</h2>

        <div className="currency-grid">
          {popularneWaluty.map((waluta) => (
            <div
              key={waluta.code}
              className={`currency-card ${
                wybranaWaluta?.code === waluta.code ? "active" : ""
              }`}
              onClick={() => wybierzPopularna(waluta)}
            >
              <div className="currency-code">{waluta.code}</div>

              <div className="currency-rate">{waluta.mid.toFixed(4)} PLN</div>

              <div className="currency-name">za 1 {waluta.currency}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Przelicznik</h2>

        <div className="converter">
          <div className="direction-buttons">
            <button
              className={kierunek === "PLN_NA_WALUTE" ? "active" : ""}
              type="button"
              onClick={() => setKierunek("PLN_NA_WALUTE")}
            >
              PLN → Waluta
            </button>

            <button
              className={kierunek === "WALUTA_NA_PLN" ? "active" : ""}
              type="button"
              onClick={() => setKierunek("WALUTA_NA_PLN")}
            >
              Waluta → PLN
            </button>
          </div>

          <input
            type="number"
            placeholder={
              kierunek === "PLN_NA_WALUTE" ? "Wpisz kwotę w PLN" : "Wpisz kwotę w walucie"
            }
            value={kwota}
            onChange={(e) => setKwota(e.target.value)}
          />

          <select
            title="wybierz walute"
            value={wybranaWaluta?.code || ""}
            onChange={(e) => {
              const znaleziona = kursy.find((w) => w.code === e.target.value);

              setWybranaWaluta(znaleziona || null);
            }}
          >
            {kursy.map((waluta) => (
              <option key={waluta.code} value={waluta.code}>
                {waluta.code} - {waluta.currency}
              </option>
            ))}
          </select>

          <button type="button" onClick={przelicz}>
            Przelicz
          </button>

          {wynik && <div className="result">{wynik}</div>}
        </div>
      </div>
    </div>
  );
}
