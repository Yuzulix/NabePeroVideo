import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DrawerAppBar from "./components/AppBar";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
