import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VideoModal from "./VideoModal";
import PropTypes from "prop-types";

const VideoCard = ({title}) => (
  <>
    <Box marginTop={2}>
      <VideoModal />
      <Typography variant="h5" component="h2" marginTop={2}>
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse numquam
        ut quo deleniti quibusdam perspiciatis deserunt nesciunt eveniet ipsam
        dolor assumenda ad enim nostrum, repellat a in asperiores libero nulla.
      </Typography>
    </Box>
  </>
);

VideoCard.propTypes = {
  title: PropTypes.string
} 

export default VideoCard;
