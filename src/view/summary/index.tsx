import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import InputTitle from "../../components/InputTitle";
import PriceBox from "../../components/PriceBox";
import SummaryBox from "../../components/SummaryBox";

const Summary = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as any;

  return (
    <Box sx={{ p: "12px" }}>
      <InputTitle>My Bookings</InputTitle>
      <SummaryBox data={Object.values(state)} />
      <PriceBox data={Object.values(state)} />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          height: 48,
          position: "absolute",
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          bottom: "100px",
          maxWidth: "94%",
        }}
        onClick={() => navigate("/payment", { state })}
      >
        <Typography variant="button">Go to Payments</Typography>
      </Button>
    </Box>
  );
};

export default Summary;
