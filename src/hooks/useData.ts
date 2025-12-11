import { useState, useEffect } from "react";
import { getData } from "../services/dataService";
import type { CompetitionsData } from "../types/Data";

export const useData = () => {
  const [data, setData] = useState<CompetitionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};