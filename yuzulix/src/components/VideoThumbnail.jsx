import { useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import GlassBox from "./GlassBox";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Fade from "@mui/material/Fade";

const VideoThumbnail = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleChange = () => {
    setHovered((prev) => !prev);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
      role="button"
    >
      <Fade in={hovered}>
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
      </Fade>
      <img
        src="https://picsum.photos/1280/720"
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
