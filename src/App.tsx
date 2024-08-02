import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
}

export default App;
