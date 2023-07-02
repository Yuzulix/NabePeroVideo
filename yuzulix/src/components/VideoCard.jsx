import { Box, Typography } from "@mui/material";
import VideoModal from "./VideoModal";

const VideoCard = () => (
  <>
    <Box marginTop={2}>
      <VideoModal/>
      <Typography variant="h4" component="h2">
        Video Info
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse numquam
        ut quo deleniti quibusdam perspiciatis deserunt nesciunt eveniet ipsam
        dolor assumenda ad enim nostrum, repellat a in asperiores libero nulla.
      </Typography>
    </Box>
  </>
);

export default VideoCard;
