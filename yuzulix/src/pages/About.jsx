import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const names = ["smile", "chihiro", "nabe", "meruert"];

const Profile = ({ name }) => (
  <>
    <Box sx={{}}>
      <Box>
        <img
          src="https://picsum.photos/800/900"
          alt="team member image"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{}}>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quae
          possimus. Assumenda animi odio tempora, sed officia ea unde soluta!
        </Typography>
      </Box>
    </Box>
  </>
);

Profile.propTypes = {
  name: PropTypes.string,
};

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
        <Typography variant="h4" component="h1">
          Lorem ipsum.
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          adipisci, earum at rem dicta in.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: 5,
        }}
      >
        {names.map((name, i) => (
          <Profile key={i} name={name} />
        ))}
      </Box>
    </>
  );
};

export default About;
