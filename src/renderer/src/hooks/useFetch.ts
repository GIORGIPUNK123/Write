import { useState, useEffect } from 'react';
import { getRandomWords } from '../data/wordList';

const useFetchWords = (amount: number) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);
      setData(getRandomWords(amount));
    } catch (err: any) {
      setError(err?.message ?? 'Failed to load words');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [amount]);

  return { data, loading, error };
};

export default useFetchWords;
