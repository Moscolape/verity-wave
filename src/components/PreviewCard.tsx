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
        <img src={previewUrl} className="w-full object-cover" />
      )}

      <div className="p-3 flex justify-between items-center">
        <p className="text-sm">{file.name}</p>
        <button onClick={onRemove} className="text-red-600 text-sm cursor-pointer hover:text-red-400">
          Remove
        </button>
      </div>
    </div>
  );
};