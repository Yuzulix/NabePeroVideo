import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import StyledButton from "./Button";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: "",
    subject: "",
    message: "",
  });
  console.log('ERRORS', errors)

  const onSubmit = (data) => {
    console.log("CONTACT FORM DATA", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        {...register("email", {
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "email invalid",
          },
        })}
        fullWidth
        margin="normal"
        // get bool from errors.email
        // error={errors.email}
      />
      <TextField
        label="Subject"
        {...register("subject")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Message"
        {...register("message")}
        multiline
        fullWidth
        margin="normal"
        rows={4}
      />
      <StyledButton />
    </form>
  );
};

export default ContactForm;
