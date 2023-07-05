import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{position: 'absolute', bottom: '0', height: '2rem'}}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "secondary.main",
          padding: 3,
          width: "100vw",
          left: "calc(-50vw + 50%)",
        }}
      >
        <Box sx={{ flexGrow: 2 }}>
          <Typography component="p">LEFT</Typography>
          <Typography component="p">LEFT</Typography>
          <Typography component="p">LEFT</Typography>
          <Typography component="p">LEFT</Typography>
          <Typography component="p">LEFT</Typography>
        </Box>
        <Box sx={{ flexGrow: 3 }}>
          <Typography component="p">RIGHT</Typography>
          <Typography component="p">RIGHT</Typography>
          <Typography component="p">RIGHT</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
