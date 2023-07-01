import { Grid, Typography, Box } from "@mui/material";

const VideoCard = () => {
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          padding: 5,
          background:
            "linear-gradient(0deg, hsl(55deg 100% 50%) 0%, hsl(45deg 100% 50%) 11%, hsl(34deg 100% 53%) 21%, hsl(17deg 100% 59%) 30%, hsl(357deg 91% 59%) 39%, hsl(337deg 100% 43%) 49%, hsl(329deg 100% 36%) 59%, hsl(315deg 100% 27%) 70%, hsl(289deg 100% 21%) 84%, hsl(240deg 100% 20%) 100%)",
        }}
      >
        <Box
          sx={{
            display:'flex',
            justifyContent: "space-between",
            mb: 0.5,
          }}
        >
          <Typography component="span" sx={{ color: "common.white" }}>
            Left
          </Typography>
          <Typography component="span" sx={{ color: "common.white" }}>
            Right
          </Typography>
        </Box>
        <img src="https://picsum.photos/1280/720" alt="" className="img" />
        <Box paddingTop={1} border={1}>
          <Typography variant="subtitle1" component="h2">
            Clip Name
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default VideoCard;
