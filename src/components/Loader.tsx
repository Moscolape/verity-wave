export const Loader = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-black border-t-transparent" />
      <span className="ml-3 text-gray-600 text-sm">
        Analyzing media...
      </span>
    </div>
  );
};