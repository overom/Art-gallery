import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff52',
      main: '#EFC49A',
      dark: '#c7a500',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
    typography: {
      useNextVariants: true,
    },
  },
});
export default theme;
