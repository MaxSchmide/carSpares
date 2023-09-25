import { ErrorMessage } from '@/components/ErrorMessage';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isError: boolean;
};

const ErrorProvider = ({ children, isError }: Props) => {
  if (isError) {
    return <ErrorMessage />;
  }

  return <>{children}</>;
};

export default ErrorProvider;
