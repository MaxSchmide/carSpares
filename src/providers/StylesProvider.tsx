import { GlobalStyles, theme } from '@/styles';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const StylesProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StylesProvider;
