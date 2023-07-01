import { Box, Container } from "@mui/material";
import VideoCard from "../components/VideoCard";
import MyButton from "../components/Button";

const Home = () => (
  <>
    <Container sx={{ marginY: 5 }}>
      <VideoCard />
      <Box margin={1}><MyButton/></Box>
    </Container>
  </>
);

export default Home;
