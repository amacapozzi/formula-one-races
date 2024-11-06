import { useState } from "react";

export const useWikiepedia = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");

  const getData = async (name: string) => {
    try {
      const response = await fetch(
        `https://es.wikipedia.org/api/rest_v1/page/summary/${name}`
      );
      if (!response.ok) {
        setError(true);
      }
      const jsonData = await response.json();
      setData(jsonData.extract);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getData };
};
