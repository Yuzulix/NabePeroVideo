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
          Meet our team!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="black"
          sx={{ pt: 1, maxWidth: 450 }}
        >
          The Nabepero Post Production team is a dynamic and diverse video
          editing team that combines the skills of Japanese and English
          bilingual professionals
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="black"
          sx={{ pt: 1, maxWidth: 450 }}
        >
          With a passion for constantly curating their skills, we bring a unique
          cross-cultural perspective to our projects, ensuring exceptional
          quality and effective communication with a global audience.
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
