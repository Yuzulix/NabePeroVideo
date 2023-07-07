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
    mode: "light",
    primary: {
      main: "#6DB193",
    },
    secondary: {
      main: "#6db193",
    },
    accent: {
      main: '#EDE9DD'
    },
    light: {
      main: "#fcf4d9",
    },
    error: {
      main: "#c07791",
    },
  },
});

export default theme;
