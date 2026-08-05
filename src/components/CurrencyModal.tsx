import { Currency } from "@/types/currency";

interface CurrencyModalProps {
  currencies: Currency[];
  onClose: () => void;
}

export default function CurrencyModal({ currencies, onClose }: CurrencyModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Wszystkie kursy NBP</span>
          <button type="button" className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-list">
          {currencies.map((currency) => (
            <div key={currency.code} className="modal-row">
              <div className="modal-row-left">
                <span className="modal-code">{currency.code}</span>
                <span className="modal-name">{currency.currency}</span>
              </div>
              <span className="modal-rate">{currency.mid.toFixed(4)} PLN</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
