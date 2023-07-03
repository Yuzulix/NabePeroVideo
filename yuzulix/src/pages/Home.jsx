import { Container, Grid } from "@mui/material";
import VideoCard from "../components/VideoCard";

const Home = () => (
  <>
    <Container sx={{ marginY: 10 }}>
      <Grid container spacing={{xs: 1, md: 6}}>
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
    </Container>
  </>
);

export default Home;
