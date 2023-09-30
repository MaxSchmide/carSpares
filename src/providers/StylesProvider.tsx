import { GlobalStyles, theme } from '@/styles';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './StyleSheetProvider';

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
