import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { ListBox } from "../../components/ListBox";

import cars from "../../mock/cars.json";
import flights from "../../mock/flights.json";
import hotels from "../../mock/hotels.json";
import { BookingType } from "../home";
import AppManager from "../../services/app-services/api";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation() as {
    state: {
      data: BookingType;
    };
  };

  const [selected, setSelected] = useState({});
  const handleBooking = () => {
    navigate("/summary", { state: selected });
    Object.values(selected).forEach((book: any) => {
      if (book.type === "flight") {
        AppManager.travelMessage(
          "Get a chance to get a 15% discount on overseas flights"
        );
      } else if (book.type === "car") {
        AppManager.travelMessage(
          "There is a special 40% discount for you at the car rental company of your choice."
        );
      }
    });
  };
  return (
    <Box
      sx={{
        height: "calc(100vh - 40px)",
        position: "relative",
        overflow: "hidden",
        padding: "0px 12px",
        paddingBottom: "100px",
      }}
    >
      <Box sx={{ overflow: "scroll", height: "100%" }}>
        {location.state?.data?.placeTicket && (
          <ListBox
            key={`flights`}
            data={flights}
            title="Flight"
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {location.state?.data?.accomodation && (
          <ListBox
            key={`hotels`}
            data={hotels}
            title="Hotel"
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {location.state?.data?.rentalCar && (
          <ListBox
            key={`cars`}
            data={cars}
            title="Rental Car"
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          height: 48,
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          bottom: "50px",
          maxWidth: "94%",
        }}
        disabled={Object.values(selected).length === 0}
        onClick={handleBooking}
      >
        <Typography variant="button">Book</Typography>
      </Button>
    </Box>
  );
};

export default Booking;
