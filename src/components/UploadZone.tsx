type Props = {
  onFileSelect: (file: File) => void;
};

export const UploadZone = ({ onFileSelect }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg", "video/mp4"];

    if (!validTypes.includes(file.type)) {
      alert("Unsupported file type");
      return;
    }

    onFileSelect(file);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-gray-700 mb-4">
        Upload Image or Video
      </h1>
      <div className="border-2 border-dashed p-6 rounded-xl text-center bg-gray-100">
        <input type="file" onChange={handleChange} />
      </div>
    </div>
  );
};