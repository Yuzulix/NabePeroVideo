import { Box, Typography } from "@mui/material";
import VideoGrid from "../components/videoGrid/VideoGrid";
import VideoContext, { videos } from "../components/videoGrid/VideoContext";

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
        Lorem ipsum.
      </Typography>
      <Typography variant="body1" component="p" color="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae adipisci,
        earum at rem dicta in.
      </Typography>
    </Box>
    <VideoContext.Provider value={videos}>
      <VideoGrid />
    </VideoContext.Provider>
  </>
);

export default Home;
