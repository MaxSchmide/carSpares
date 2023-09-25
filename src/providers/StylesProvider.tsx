import StyledComponentsRegistry from '@/lib/styled';
import { GlobalStyles, theme } from '@/styles';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const StylesProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default StylesProvider;
