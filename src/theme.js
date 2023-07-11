import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#6DB193",
    },
    secondary: {
      main: "#6db193",
    },
    accent: {
      light: '#faf5e7',
      main: '#F4E5C2',
      dark: '#efc361',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: "#c07791",
    },
  },
});

export default theme;
