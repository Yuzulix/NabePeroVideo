import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SimpleAppBar from "./components/AppBar";
import SwipeableEdgeDrawer from './components/NavDrawer'

function App() {
  return (
    <>
      <SimpleAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SwipeableEdgeDrawer />
    </>
  );
}

export default App;
