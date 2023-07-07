import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SimpleAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Box } from "@mui/material";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Box sx={{ minHeight: "100vh", position: "relative" }}>
        <Box sx={{ paddingBottom: "5rem" }}>
          <SimpleAppBar />
          <Container sx={{ marginTop: 10 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
