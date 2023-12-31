import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/nabepero-logo.png";
import { Link } from "react-router-dom";
import SwipeableEdgeDrawer from "../components/NavDrawer";

const navItems = ["Home", "About", "Contact"];

function SimpleAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to={"/Home"}>
              <img src={logo} alt="logo" width={200} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                style={{ textDecoration: "none" }}
                to={`/${item}`}
              >
                <Button sx={{ color: "black" }}>{item}</Button>
              </Link>
            ))}
          </Box>
          <SwipeableEdgeDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SimpleAppBar;
