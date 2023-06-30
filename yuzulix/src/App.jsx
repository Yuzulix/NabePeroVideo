import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import VideoCard from "./components/VideoCard";
import SearchAppBar from "./components/AppBar";
import cities from "./data.json";

function App() {
  return (
    <>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city, i) => (
          <div key={i}>
            <Typography
              variant="h4"
              component="h4"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <VideoCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </>
  );
}

export default App;
