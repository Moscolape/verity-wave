import { useState } from "react";
import { detectAI } from "../services/mockApi";

export const useDetection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runDetection = async (file: File) => {
    setLoading(true);
    setError(null);

    try {
      const res = await detectAI(file);
      setResult(res.score);
      return res.score;
    } catch (err) {
      setError("Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return { loading, result, error, runDetection, reset };
};