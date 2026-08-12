import { useState } from "react";
import { CurrencyModalProps } from "@/types/currency";

type SortOption = "name" | "rate-asc" | "rate-desc";

export default function CurrencyModal({ currencies, onClose }: CurrencyModalProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("name");

  const filtered = currencies
    .filter(
      (c) =>
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.currency.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "name") return a.currency.localeCompare(b.currency);
      if (sort === "rate-asc") return a.mid - b.mid;
      if (sort === "rate-desc") return b.mid - a.mid;
      return 0;
    });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Wszystkie kursy NBP</span>
          <button type="button" className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-search">
          <input
            type="text"
            placeholder="Szukaj waluty... (np. USD, EURO)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        </div>
        <div className="modal-sort">
          <button
            type="button"
            className={`modal-sort-btn ${sort === "name" ? "active" : ""}`}
            onClick={() => setSort("name")}
          >
            Nazwa A-Z
          </button>
          <button
            type="button"
            className={`modal-sort-btn ${sort === "rate-asc" ? "active" : ""}`}
            onClick={() => setSort("rate-asc")}
          >
            Kurs ↑
          </button>
          <button
            type="button"
            className={`modal-sort-btn ${sort === "rate-desc" ? "active" : ""}`}
            onClick={() => setSort("rate-desc")}
          >
            Kurs ↓
          </button>
        </div>
        <div className="modal-list">
          {filtered.length > 0 ? (
            filtered.map((currency) => (
              <div key={currency.code} className="modal-row">
                <div className="modal-row-left">
                  <span className="modal-code">{currency.code}</span>
                  <span className="modal-name">{currency.currency}</span>
                </div>
                <span className="modal-rate">{currency.mid.toFixed(4)} PLN</span>
              </div>
            ))
          ) : (
            <p className="modal-empty">Nie znaleziono waluty</p>
          )}
        </div>
      </div>
    </div>
  );
}
