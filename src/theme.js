import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: [
      "'Public Sans'",
      "Roboto",
      "-apple-system",
      "sans-serif",
    ].join(","),
  },
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
      light: "#faf5e7",
      main: "#F4E5C2",
      dark: "#efc361",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    error: {
      main: "#c07791",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
