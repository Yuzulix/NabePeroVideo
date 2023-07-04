import { teal } from "@mui/material/colors";
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
      main: teal[400],
      dark: teal[700],
    },
    secondary: {
      main: teal[50],
    },
    error: {
      main: "#c07791",
    },
  },
});

export default theme;