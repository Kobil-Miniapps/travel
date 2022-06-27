import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import InputTitle from "../../components/InputTitle";
import PriceBox from "../../components/PriceBox";
import SummaryBox from "../../components/SummaryBox";

const BookingInfo = () => {
  const { state } = useLocation() as any;

  return (
    <Box sx={{ p: "12px" }}>
      <InputTitle>My Bookings</InputTitle>
      <SummaryBox data={Object.values(state)} />
      <PriceBox data={Object.values(state)} payment={true} />
    </Box>
  );
};

export default BookingInfo;
