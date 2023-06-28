import { Grid, Typography, Box, Paper } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const VideoCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://picsum.photos/200/"
          alt="lorem picsum"
          className="img"
        />
        <Box padding={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Ipsum
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default VideoCard;
