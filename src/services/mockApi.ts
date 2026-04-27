export const detectAI = (file: File): Promise<{ score: number }> => {
  return new Promise((resolve, reject) => {
    const fileSize = file.size;

    // simulating larger files taking longer
    const delay = Math.min(3000, 1000 + fileSize / 50000);

    setTimeout(() => {
      // larger files that are slightly more likely to fail
      const failChance = fileSize > 5_000_000 ? 0.2 : 0.1;

      if (Math.random() < failChance) {
        reject(new Error("Detection failed"));
        return;
      }

      // simulating score variation
      const baseScore = Math.random() * 100;

      resolve({
        score: Math.min(baseScore, 100)
      });
    }, delay);
  });
};