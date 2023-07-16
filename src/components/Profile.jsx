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
          <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
            {profile.name}
          </Typography>
          <Typography variant="subtitle2" component="p" sx={{}}>
            {profile.title}
          </Typography>
          <ul style={{paddingInlineStart: 10, marginTop: 0}}>
            {profile.bio.map((p, i) => (
                <Typography key={i} variant="body1" component="li" sx={{ pt: 2}}>
                  {p}
                </Typography>
            ))}
          </ul>
          {profile.languages.map((p, i) => (
            <Typography
              key={i}
              variant="caption"
              component="span"
              sx={{ paddingRight: 1 }}
            >
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
