import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Profile = ({ profile }) => {
  const imgUrl = new URL(`../assets/team/${profile.name}.jpg`, import.meta.url)
    .href;

  return (
    <>
      <Box sx={{}}>
        <Box>
          <img
            src={imgUrl}
            alt="team member image"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{}}>
          <Typography variant="h5" component="h3">
            {profile.name}
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{py: 1}}>
              {profile.title}
            </Typography>
          {profile.bio.map((p, i) => (
            <Typography key={i} variant="body1" component="p" sx={{py: 1}}>
              {p}
            </Typography>
          ))}
          {profile.languages.map((p, i) => (
            <Typography key={i} variant="body1" component="span" sx={{paddingRight: 1}}>
              {p}
            </Typography>
          ))}
          
        </Box>
      </Box>
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};

export default Profile;
