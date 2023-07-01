import { Grid, Typography, Box } from "@mui/material";

const VideoCard = () => {
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          padding: 5,
          background:
            "linear-gradient(#004d40, #e0f2f1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 0.5,
            color: "common.white",
          }}
        >
          <Typography component="span">Left</Typography>
          <Typography component="span">Right</Typography>
        </Box>
        <img src="https://picsum.photos/1280/720" alt="" className="img" />
        <Box paddingTop={1}>
          <Typography variant="subtitle1" component="h2">
            Clip Name
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default VideoCard;
