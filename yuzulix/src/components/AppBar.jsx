import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../assets/nabepero-logo.png";

const navItems = ["Home", "About", "Contact"];

function SimpleAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="secondary">
        <Toolbar>
          <img src={logo} alt="logo" width={200} className="classes.logo" />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{color: 'black'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SimpleAppBar;
