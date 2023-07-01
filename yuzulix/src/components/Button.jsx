import { Button, Typography } from "@mui/material";

const MyButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 20,
        border: 2,
        textTransform: 'none',
      }}
    >
      <Typography component="span" variant="subtitle1">Watch Now</Typography>
    </Button>
  );
};

export default MyButton;
