import { Box, Container, Grid, Typography } from "@mui/material";
import VideoCard from "../components/VideoCard";

const Home = () => (
  <>
    <Container sx={{ marginY: 5 }}>
      <Box
        component="section"
        sx={{
          backgroundColor: "secondary.main",
          p: 10,
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
        }}
      >
        <Typography variant="h4" component="h1">
          Lorem ipsum.
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          adipisci, earum at rem dicta in.
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 1, md: 6 }}>
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
