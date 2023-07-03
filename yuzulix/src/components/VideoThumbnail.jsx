import { useState } from "react";
import Box from "@mui/material/Box";
import { teal } from "@mui/material/colors";
import PropTypes from "prop-types";
import GlassBox from "./GlassBox";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Fade from "@mui/material/Fade";

const VideoThumbnail = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      onClick={props.handleOpen}
      sx={{
        position: "relative",
        padding: 3,
        background: `linear-gradient(${teal[500]}, ${teal[50]})`,
        borderRadius: "5px",
      }}
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
      role='button'
    >
      <Fade in={checked}>
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
      <img src="https://picsum.photos/1280/720" alt="" className="img" />
    </Box>
  );
};

export default VideoThumbnail;

VideoThumbnail.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};
