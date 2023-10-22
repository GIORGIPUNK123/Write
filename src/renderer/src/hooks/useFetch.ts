import { useState, useEffect } from "react";
import axios from "axios";

const useFetchWords = (amount: number) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get(
          `https://random-word-api.vercel.app/api?words=${amount}`
        );
        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWords();
  }, [amount]); // re-run the effect whenever the amount changes

  return { data, loading, error };
};

export default useFetchWords;
