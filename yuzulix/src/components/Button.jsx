import { Button, Typography } from "@mui/material";

const StyledButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 8,
        textTransform: "none",
        display: 'block'
      }}
      type="submit"
    >
      <Typography component="span" variant="subtitle1">
        Submit
      </Typography>
    </Button>
  );
};

export default StyledButton;
