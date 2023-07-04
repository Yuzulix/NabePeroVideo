import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const navItems = ["Home", "About", "Contact"];
  const style = { textDecoration: "none", color: "black" };

  return (
    <>
      <IconButton
        sx={{
          position: "fixed",
          top: 10,
          right: 16,
          // backgroundColor: "primary.main",
          // color: "white",
          borderRadius: 1,
          visibility: { xs: "visible", sm: "hidden" },
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={state} onClose={toggleDrawer(false)}>
        <List>
          {navItems.map((item) => (
            <Link key={item} style={style} to={`/${item}`}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={`${item}`} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
