import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        paddingTop: 1,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          margin: { xs: "2 0", sm: 2 },
          padding: 1,
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center">
          Send us an email!
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          textAlign="center"
        ></Typography>
        <Typography variant="subtitle1" component="p" textAlign="center">
          Please!
        </Typography>
      </Box>
      <Box sx={{ width: 450 }}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
