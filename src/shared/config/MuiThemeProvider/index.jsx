import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Layout from '#Layouts/index';

export default function MuiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        {children}
      </Layout>
    </ThemeProvider>
  );
}
