import { Box } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
      <Box sx={{ border: "1px solid red", width: {xs: '100%', sm: "50%"}, margin: {xs: '2 0', sm: 2} }}>
        LEFT
      </Box>
      <Box sx={{}}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
