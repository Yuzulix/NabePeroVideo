import { Box, Typography } from "@mui/material";
import Profile from "../components/Profile";
// const names = ["smile", "chihiro", "nabe", "meruert"];
import db from "../data.json";

const About = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "secondary.main",
          p: 10,
          marginBottom: 10,
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          color: "white",
        }}
      >
        <Typography variant="h4" component="h1" color="black">
          Lorem ipsum.
        </Typography>
        <Typography variant="body1" component="p" color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          adipisci, earum at rem dicta in.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 5,
        }}
        component="section"
      >
        {db.profiles.map((profile, i) => (
          <Profile key={i} profile={profile} />
        ))}
      </Box>
    </>
  );
};

export default About;
