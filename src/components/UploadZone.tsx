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
    <div className="border-2 border-dashed p-6 rounded-xl text-center">
      <input type="file" onChange={handleChange} />
      <p className="mt-2 text-sm text-gray-500">
        Upload image or video
      </p>
    </div>
  );
};