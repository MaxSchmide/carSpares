import { useEffect } from 'react';
import { initFavourites, useAppDispatch } from '../redux';

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initFavourites());
  }, []);
};
