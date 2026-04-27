type Props = {
  file: File;
  previewUrl: string;
  onRemove: () => void;
};

export const FilePreview = ({ file, previewUrl, onRemove }: Props) => {
  const isVideo = file.type.startsWith("video");

  return (
    <div className="rounded-xl overflow-hidden shadow-md mb-10 p-2">
      {isVideo ? (
        <video src={previewUrl} controls className="w-full" />
      ) : (
        <div className="w-full max-h-100 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={previewUrl}
            className="max-w-full max-h-100 object-contain"
          />
        </div>
      )}

      <div className="p-3 md:flex justify-between items-center">
        <p className="text-sm">{file.name}</p>
        <button
          onClick={onRemove}
          className="text-red-600 text-sm cursor-pointer hover:text-red-700 hover:bg-gray-300 mt-5 md:mt-0 bg-gray-200 p-2 rounded-md transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
