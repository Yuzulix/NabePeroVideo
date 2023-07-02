import { Button, Typography } from "@mui/material";

const StyledButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 8,
        textTransform: 'none',
      }}
    >
      <Typography component="span" variant="subtitle1">Watch Now</Typography>
    </Button>
  );
};

export default StyledButton;
