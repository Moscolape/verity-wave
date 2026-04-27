import { useRef } from "react";
import { Upload } from "lucide-react";

type Props = {
  onFileSelect: (file: File) => void;
};

export const UploadZone = ({ onFileSelect }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg", "video/mp4"];

    if (!validTypes.includes(file.type)) {
      alert("Unsupported file type");

      if (inputRef.current) {
        inputRef.current.value = "";
      }

      return;
    }

    onFileSelect(file);
  };

  return (
    <div className="bg-white p-6 rounded">

      <div className="flex items-center gap-2 mb-4">
        <Upload className="w-5 h-5 text-gray-600" />

        <h1 className="text-lg font-bold text-gray-700">
          Upload Image or Video
        </h1>
      </div>

      <div className="border-2 border-dashed p-6 rounded-xl text-center bg-gray-50">

        <input
          ref={inputRef}
          type="file"
          onChange={handleChange}
        />

      </div>
    </div>
  );
};