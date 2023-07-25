import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import VideoThumbnail from "./VideoThumbnail";
import VideoContext from "./VideoContext";

export default function VideoModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const video = useContext(VideoContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 350, sm: 550, md: 800 },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  const iFrameWraper = {
    position: "relative",
    display: "block",
    width: "100%",
    padding: 0,
    overflow: "hidden",
    "&::before": {
      paddingTop: "56.25%",
      display: "block",
      content: '""',
      boxSizing: "border-box",
    },
    iFrame: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: 0,
    },
  };

  return (
    <div>
      <VideoThumbnail handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {video.title}
          <Box sx={iFrameWraper}>
            <iframe
              src="https://www.youtube.com/embed/DxL2HoqLbyA"
              title="YouTube video player"
              allow="accelerometer; autoplay; gyroscope"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
