import { Container, Loader } from './Spinner.styled';

type SpinnerProps = {
  size: number;
};

export function Spinner({ size }: SpinnerProps) {
  return (
    <Container>
      <Loader size={size} />
    </Container>
  );
}
