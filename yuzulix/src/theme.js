// import { teal } from "@mui/material/colors";
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
      // main: teal[400],
      // dark: teal[700],
      main: "#6DB193",
    },
    secondary: {
      // main: teal[50],
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
