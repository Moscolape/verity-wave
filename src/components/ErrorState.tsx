type Props = {
  message: string;
  onRetry?: () => void;
};

export const ErrorBanner = ({ message, onRetry }: Props) => {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-xl flex justify-between items-center">
      <span>{message}</span>

      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm underline font-medium"
        >
          Retry
        </button>
      )}
    </div>
  );
};