import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { teal } from "@mui/material/colors";
import DrawerAppBar from "./components/AppBar";

const themeOptions = {
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
    },
    secondary: {
      main: "#2979ff",
    },
    error: {
      main: "#c07791",
    },
  },
};
const theme = createTheme(themeOptions);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
