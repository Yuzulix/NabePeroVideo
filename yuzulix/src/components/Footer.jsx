import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        backgroundColor: "secondary.main",
        padding: 10,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      <Box sx={{flexGrow: 2}}>
        <Typography component="p">LEFT</Typography>
        <Typography component="p">LEFT</Typography>
        <Typography component="p">LEFT</Typography>
        <Typography component="p">LEFT</Typography>
      </Box>
      <Box sx={{flexGrow: 3}}>
        <Typography component="p">RIGHT</Typography>
        <Typography component="p">RIGHT</Typography>
        <Typography component="p">RIGHT</Typography>
        <Typography component="p">RIGHT</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
