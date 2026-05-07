"use client";

import { useEffect, useState } from "react";

const POPULARNE = ["USD", "EUR", "GBP", "CHF", "JPY", "CZK"];

export default function Home() {
  const [kursy, setKursy] = useState([]);
  const [wybranaWaluta, setWybranaWaluta] = useState(null);
  const [kwota, setKwota] = useState("");
  const [kierunek, setKierunek] = useState("PLN_NA_WALUTE");
  const [wynik, setWynik] = useState("");

  useEffect(() => {
    fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setKursy(data[0].rates);
        setWybranaWaluta(data[0].rates[0]);
      });
  }, []);

  const popularneWaluty = kursy.filter((w) => POPULARNE.includes(w.code));

  const przelicz = () => {
    if (!kwota || !wybranaWaluta) return;
    const liczba = parseFloat(kwota);
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

  const wybierzPopularna = (waluta) => {
    setWybranaWaluta(waluta);
  };

  return (
    <div>
      <h1>Przelicznik walut NBP</h1>

      {/* Górny panel: popularne waluty */}
      <div>
        <h2>Popularne waluty</h2>
        <div>
          {popularneWaluty.map((waluta) => (
            <div key={waluta.code} onClick={() => wybierzPopularna(waluta)}>
              <div>{waluta.code}</div>
              <div>{waluta.mid.toFixed(4)} PLN</div>
              <div>za 1 {waluta.currency}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Przelicznik</h2>

        <div>
          <button onClick={() => setKierunek("PLN_NA_WALUTE")}>
            PLN → Waluta
          </button>
          <button onClick={() => setKierunek("WALUTA_NA_PLN")}>
            Waluta → PLN
          </button>
        </div>

        <input
          type="number"
          placeholder={
            kierunek === "PLN_NA_WALUTE"
              ? "Wpisz kwotę w PLN"
              : "Wpisz kwotę w walucie"
          }
          value={kwota}
          onChange={(e) => setKwota(e.target.value)}
        />

        <select
          value={wybranaWaluta?.code || ""}
          onChange={(e) => {
            const znaleziona = kursy.find((w) => w.code === e.target.value);
            setWybranaWaluta(znaleziona);
          }}
        >
          {kursy.map((waluta) => (
            <option key={waluta.code} value={waluta.code}>
              {waluta.code} - {waluta.currency}
            </option>
          ))}
        </select>

        <button onClick={przelicz}>Przelicz</button>

        {wynik && <div>{wynik}</div>}
      </div>
    </div>
  );
}
