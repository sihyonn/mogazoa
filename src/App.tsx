import { RouterProvider } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import router from '@/Router';
import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
