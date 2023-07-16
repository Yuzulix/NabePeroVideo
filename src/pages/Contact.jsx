import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box
      sx={{
        paddingTop: 1,
        margin: 1,
      }}
    >
      <Box
        sx={{
          margin: "2 0",
          padding: 1,
        }}
      >
        <Typography variant="h4" component="h1">
          Send us an enquiry!
        </Typography>
        <Typography variant="subtitle1" component="p">
          Someone from the team will respond within 48 hours.
        </Typography>
      </Box>
      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
