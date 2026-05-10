import { Direction } from "@/types/currency";

interface DirectionButtonsProps {
  direction: Direction;
  onChange: (direction: Direction) => void;
}

export default function DirectionButtons({ direction, onChange }: DirectionButtonsProps) {
  return (
    <div className="direction-buttons">
      <button
        className={direction === "PLN_TO_CURRENCY" ? "active" : ""}
        type="button"
        onClick={() => onChange("PLN_TO_CURRENCY")}
      >
        PLN → Waluta
      </button>

      <button
        className={direction === "CURRENCY_TO_PLN" ? "active" : ""}
        type="button"
        onClick={() => onChange("CURRENCY_TO_PLN")}
      >
        Waluta → PLN
      </button>
    </div>
  );
}
