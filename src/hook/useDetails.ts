import { User } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";

const useDetails = (url: string) => {
  const [Details, setDetails] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const FetchData = async () => {
      setError(null);
      const response = await axios.get(url);
      const responseData: User = response.data;
      setDetails(responseData);
    };
    FetchData().catch((error) => setError(error.response.data));
  }, [url]);
  return { Details, error };
};

export { useDetails };
