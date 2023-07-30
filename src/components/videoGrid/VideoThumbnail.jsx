import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import GlassBox from "../GlassBox";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { useContext } from "react";
import VideoContext from "./VideoContext";

const VideoThumbnail = (props) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const video = useContext(VideoContext);
  const imgUrl = new URL(
    `../../assets/thumbnails/${video.thumbnail}`,
    import.meta.url
  ).href;

  return (
    <Box
      onClick={props.handleOpen}
      sx={{
        position: "relative",
        padding: 3,
        background: `linear-gradient(${getRandomInt(
          360
        )}deg, #323232 0%,#6DB193 50%, #F4E5C2 100%)`,
        borderRadius: "5px",
      }}
      role="button"
      aria-label="Play Video"
    >
      <GlassBox
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 50,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayArrowRoundedIcon
          aria-label="play"
          color="primary"
          sx={{ fontSize: 40 }}
        />
      </GlassBox>
      <img
        src={imgUrl}
        alt=""
        className="img"
        loading="lazy"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default VideoThumbnail;

VideoThumbnail.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};
