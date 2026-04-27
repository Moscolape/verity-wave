type Props = {
  score: number;
  onReset: () => void;
};

export const ResultCard = ({ score, onReset }: Props) => {
  const isAI = score > 50;

  const label = isAI ? "Likely AI-Generated" : "Likely Real";
  const color = isAI ? "bg-red-500" : "bg-green-500";
  const bg = isAI ? "bg-red-50" : "bg-green-50";

  return (
    <div className={`p-5 rounded-2xl shadow-md ${bg} space-y-4`}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Detection Result</h2>
        <span className="text-sm font-medium">{label}</span>
      </div>

      <div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-500`}
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Confidence: {score.toFixed(2)}%
        </p>
      </div>

      <button
        onClick={onReset}
        className="text-sm text-gray-600 underline"
      >
        Analyze another file
      </button>
    </div>
  );
};