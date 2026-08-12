interface SwapButtonProps {
  onClick: () => void;
}

export default function SwapButton({ onClick }: SwapButtonProps) {
  return (
    <button
      type="button"
      className="swap-btn"
      onClick={onClick}
      aria-label="Zamień kierunek"
    >
      ⇄
    </button>
  );
}
