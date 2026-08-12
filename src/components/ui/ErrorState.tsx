interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="state-wrapper">
      <p className="state-error">{message}</p>
    </div>
  );
}
