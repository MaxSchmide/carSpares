import { useEffect } from 'react';
import { initCart, initFavourites, useAppDispatch } from '../redux';

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initFavourites());
    dispatch(initCart());
  }, []);
};
