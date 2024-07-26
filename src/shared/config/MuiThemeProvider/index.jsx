import theme from './theme';
import Layout from '#Layouts/index';
import { CssBaseline, ThemeProvider } from '@mui/material';

export const MuiThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        {children}
      </Layout>
    </ThemeProvider>
  );
};
