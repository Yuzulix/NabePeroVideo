import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const GlassBox = styled(Box)(() => ({
  background:
    "linear-radient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: "2px",
  border: "1px solid rgba(255, 255, 255, 0.38)",
  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.57)",
}));

export default GlassBox;
