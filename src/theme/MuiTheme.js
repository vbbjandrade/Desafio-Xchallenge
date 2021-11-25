import { createTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createTheme({
  palette: {
    primary: {
      main: "#3bc4b0", contrastText: "#ffffff"
    },
    secondary: {
      main: "#a4bbdd"
    }
  },
  typography: {
    h6: {
      fontWeight: 600,
      color: "#5c5958"
    },
    body1: {
      fontSize: "0.9em",
      color: "#5c5958"
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;