import { fetchClient } from '@/services';
import { useCallback, useEffect, useState } from 'react';

export const useQuery = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const fetched = await fetchClient.get(url).then((res) => res.data);
      setData(fetched);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    data,
    isError,
  };
};
