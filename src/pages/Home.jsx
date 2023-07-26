import { Box, Typography } from "@mui/material";
import VideoGrid from "../components/videoGrid/VideoGrid";

const Home = () => (
  <>
    <Box
      component="section"
      sx={{
        backgroundColor: "secondary.main",
        p: 10,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        color: "white",
      }}
    >
      <Typography variant="h4" component="h1" color="black">
        YOUR POST PRODUCTION TEAM
      </Typography>
      <Typography variant="h5" component="p" color="black">
        We are experts in creating quality videos that perfectly fit your
        vision!
      </Typography>
    </Box>
    <VideoGrid />
  </>
);

export default Home;
