import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { handleError } from '../api/axiosConfig';

export const useFetch = <T>(apiCallback: Function, ...params: string[]) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        setIsLoading(true);
        const fetchedData = await apiCallback(...params);

        setData(fetchedData.data);
        setError(null);
      } catch (error) {
        handleError(error as AxiosError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, params);

  return { isLoading, data, error };
};
