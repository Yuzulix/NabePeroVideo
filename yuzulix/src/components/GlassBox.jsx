import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlassBox = styled(Box)(() => ({
  background:
    "linear-radient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
}));

export default GlassBox;
