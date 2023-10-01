import { fetchClient } from '@/services';
import { QueryParams } from '@/types/query';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useQuery = <T>(url: string, params?: QueryParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const fetchData = useCallback(
    async (signal: AbortSignal) => {
      try {
        const fetched = await fetchClient
          .get(url, { signal, params })
          .then((res) => res.data);
        setData(fetched);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [url, params],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData]);

  const result = useMemo(
    () => ({
      isLoading,
      data,
      isError,
    }),
    [isLoading, data, isError],
  );

  return result;
};
