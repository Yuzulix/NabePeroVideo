import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SimpleAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ minHeight: "100vh", position: "relative" }}>
        <Box sx={{paddingBottom: '5rem'}}>
          <SimpleAppBar />
          <Container sx={{ marginTop: 10 }}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
