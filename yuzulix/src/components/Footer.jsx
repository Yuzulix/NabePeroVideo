import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../assets/nabepero-logo.png";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      component="footer"
      
      sx={{ position: "absolute", bottom: "0", height: "2rem" }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          borderTop: "1px solid",
          borderColor: "secondary.main",
          padding: 4,
          width: "100vw",
          left: "calc(-50vw + 50%)",
        }}
        elevation={10}
      >
        <Box>
          <Link style={{ textDecoration: "none" }} to={"/Home"}>
            <img src={logo} alt="logo" width={200} className="classes.logo" />
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <MuiLink href="https://www.instagram.com/nabepero_ph/">
            <InstagramIcon />
          </MuiLink>
          <MuiLink href="https://www.facebook.com/profile.php?id=100063795950849">
            <FacebookIcon />
          </MuiLink>
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
