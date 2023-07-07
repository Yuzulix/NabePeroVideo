import { useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import StyledButton from "./Button";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (data) => {
    console.log("CONTACT FORM DATA", data);
    setTimeout(() => reset(), 2000)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Invalid Email",
          },
        })}
        fullWidth
        margin="normal"
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ""}
      />
      <TextField
        label="Subject"
        {...register("subject", { required: "Required" })}
        fullWidth
        margin="normal"
        error={errors.subject ? true : false}
        helperText={errors.subject ? errors.subject.message : ""}
      />
      <TextField
        label="Message"
        {...register("message", {
          required: true,
          minLength: {
            value: 10,
            message: "Min char count 10",
          },
          maxLength: {
            value: 300,
            message: "Max char coount 300",
          },
        })}
        error={errors.message ? true : false}
        helperText={errors.message ? errors.message.message : ""}
        multiline
        fullWidth
        margin="normal"
        rows={4}
      />
      <StyledButton variant="contained" type="submit">
        Submit
      </StyledButton>
      {isSubmitSuccessful && <Box>Submited, Thank you</Box>}
    </form>
  );
};

export default ContactForm;
