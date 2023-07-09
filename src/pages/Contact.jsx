import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        paddingTop: 1,
        margin: 1,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          margin: "2 0",
          padding: 1,
        }}
      >
        <Typography variant="h4" component="h1">
          Send us an email!
        </Typography>
        <Typography variant="subtitle1" component="p">
          Please!
        </Typography>
      </Box>
      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
