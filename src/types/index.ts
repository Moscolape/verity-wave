export type FileState = {
  file: File | null;
  previewUrl: string | null;
};

export type Status =
  | "idle"
  | "ready"
  | "uploading"
  | "processing"
  | "success"
  | "error";