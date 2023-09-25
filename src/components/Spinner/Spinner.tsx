import { SpinnerProps } from '@/types/spinner';
import { Container, Loader } from './Spinner.styled';

export function Spinner({ size }: SpinnerProps) {
  return (
    <Container>
      <Loader size={size} />
    </Container>
  );
}
