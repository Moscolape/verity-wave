import { useState } from "react";
import { FilePreview } from "../components/PreviewCard";
import { UploadZone } from "../components/UploadZone";
import { useDetection } from "../hooks/useDetection";
import type { FileState, Status } from "../types";
import { Loader } from "../components/Loader";
import { ResultCard } from "../components/ResultCard";
import { ErrorBanner } from "../components/ErrorState";
import { ASSETS } from "../constants/assets";

const Dashboard = () => {
  const {
    runDetection,
    loading,
    result,
    error,
    reset: resetDetection,
  } = useDetection();

  const [fileState, setFileState] = useState<FileState>({
    file: null,
    previewUrl: null,
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);

    setFileState({ file, previewUrl: url });
    setStatus("ready");
  };

  const handleDetect = async () => {
    if (!fileState.file) return;

    setStatus("processing");

    try {
      await runDetection(fileState.file);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setFileState({ file: null, previewUrl: null });
    setStatus("idle");
    resetDetection();
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4 font-Montserrat">
      <div className="flex flex-col items-center">
        <img src={ASSETS.logo} alt="Verity Wave Logo" className="my-5"/>
        {status === "idle" && <UploadZone onFileSelect={handleFileSelect} />}
      </div>

      {fileState.file && (
        <FilePreview
          file={fileState.file}
          previewUrl={fileState.previewUrl!}
          onRemove={reset}
        />
      )}

      {status === "ready" && (
        <button
          onClick={handleDetect}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Run Detection
        </button>
      )}

      {(status === "processing" || loading) && <Loader />}

      {status === "success" && result !== null && (
        <ResultCard score={result} onReset={reset} />
      )}

      {status === "error" && (
        <ErrorBanner
          message={error || "Something went wrong"}
          onRetry={handleDetect}
        />
      )}
    </div>
  );
};

export default Dashboard;
