import Grid from "@mui/material/Grid";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  return (
    <Grid component="section" container spacing={{ xs: 1, md: 6 }}>
      <Grid item xs={12} md={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoCard />
      </Grid>
    </Grid>
  );
};

export default VideoGrid;
