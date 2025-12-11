import type { CompetitionsData } from "../types/Data";

export const getData = async (): Promise<CompetitionsData> => {
  try {
    const response = await fetch("/data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: CompetitionsData = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};