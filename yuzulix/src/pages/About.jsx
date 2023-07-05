import { Box, Typography } from "@mui/material";

import  PropTypes  from "prop-types";

const names = ["smile", "chihiro", "nabe", "meruert"];

const Profile = ({ name }) => (
  <>
    <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, marginY: 2}}>
      <Box>
        <img
          src="https://picsum.photos/600/600"
          alt="team member image"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ backgroundColor: "primary.main", marginX: 2, padding: 2}}>
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
  name: PropTypes.string
}

const About = () => {
  return (
    <>
      <Box
      >
        {names.map((name, i) => (
          <Profile key={i} name={name} />
        ))}
      </Box>
    </>
  );
};

export default About;
