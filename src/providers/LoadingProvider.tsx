import { Spinner } from '@/components/Spinner';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isLoading: boolean;
  size: number;
};

const LoadingProvider = ({ children, isLoading, size }: Props) => {
  if (isLoading) {
    return <Spinner size={size} />;
  }

  return <>{children}</>;
};

export default LoadingProvider;
