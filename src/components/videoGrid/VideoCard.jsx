import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VideoModal from "./VideoModal";
import { useContext } from "react";
import VideoContext from "./VideoContext";

const VideoCard = () => {
  const video = useContext(VideoContext);
  return (
    <>
      <Box marginTop={2}>
        <VideoModal />
        <Typography variant="h5" component="h2" marginTop={2}>
          {video.title}
        </Typography>
        <Typography variant="body1" component="p">
          {video.description}
        </Typography>
        {video.tags && video.tags.map((p, i) => (
            <Typography
              key={i}
              variant="caption"
              component="span"
              sx={{ paddingRight: 2 }}
            >
              {p}
            </Typography>
          ))}
      </Box>
    </>
  );
};

export default VideoCard;
