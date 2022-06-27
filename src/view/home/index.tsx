import { useRef, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { SwapVert as SwapVertIcon } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
//* Destructuring not working for @mui/x-date-pickers
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import CountInput from "../../components/CountInput";
import CheckBox from "../../components/Checkbox";
import InputTitle from "../../components/InputTitle";
import RadioButton from "../../components/RadioButton";
import airports from "../../mock/airports.json";

export interface BookingType {
  returnOn: string;
  departOn: string;
  adults: number;
  children: number;
  rentalCar: boolean;
  accomodation: boolean;
  placeTicket: boolean;
  taxiPickup: boolean;
  garageRental: boolean;
  travelInsurance: boolean;
  departFrom: string;
  arriveAt: string;
  roundTrip: boolean;
  oneWay: boolean;
}

const Home = () => {
  const returnOnRef = useRef<any>();
  const departOnRef = useRef<any>();

  const navigate = useNavigate();
  const [data, setData] = useState<BookingType>({
    departOn: new Date().toDateString(),
    returnOn: new Date().toDateString(),
    adults: 1,
    children: 0,
    rentalCar: true,
    accomodation: true,
    placeTicket: true,
    taxiPickup: false,
    garageRental: false,
    travelInsurance: false,
    departFrom: "",
    arriveAt: "",
    roundTrip: false,
    oneWay: false,
  });

  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  const handleChangeCount = (name: string, value: number) => {
    setData({ ...data, [name]: value });
  };

  const handleChangeCheck = (name: string, value: boolean) => {
    setData({ ...data, [name]: value });
  };

  const handleChangeRadio = (name: string) => {
    const changedData =
      name === "oneWay"
        ? { oneWay: true, roundTrip: false }
        : { oneWay: false, roundTrip: true };
    setData({ ...data, ...changedData });
  };

  const changeArriveDepart = () => {
    if (data.departFrom && data.arriveAt) {
      const tempDepart = data.departFrom;
      const tempArrive = data.arriveAt;
      setData({ ...data, departFrom: tempArrive, arriveAt: tempDepart });
    }
  };

  return (
    <Box
      p="12px"
      display={"flex"}
      flexDirection="column"
      overflow={"scroll"}
      position="relative"
      height="100%"
      pb="160px"
    >
      <Box
        gap="42px"
        display="flex"
        flexDirection={"column"}
        position="relative"
      >
        <Autocomplete
          disablePortal
          id="airport-autocomplete"
          options={airports.map((airport) => airport.name)}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} placeholder="From" />}
          value={data.departFrom === "" ? null : data.departFrom}
          onChange={(event: any, newValue: string | null) => {
            handleChange("departFrom", newValue || "");
          }}
        />
        <Box
          sx={{
            position: "absolute",
            cursor: "pointer",
            top: "42%",
            right: "0",
            transform: "translate(-50%, 0)",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={changeArriveDepart}
        >
          <SwapVertIcon
            color="primary"
            fontSize="medium"
            sx={{ opacity: data.departFrom && data.arriveAt ? 1 : 0.5 }}
          />
        </Box>
        <Autocomplete
          disablePortal
          id="airport-autocomplete"
          options={airports.map((airport) => airport.name)}
          sx={{ width: "100%" }}
          value={data.arriveAt}
          onChange={(event: any, newValue: string | null) => {
            handleChange("arriveAt", newValue || "");
          }}
          renderInput={(params) => <TextField {...params} placeholder="To" />}
        />
      </Box>
      <Box mt="18px" display={"flex"} gap="12px">
        <RadioButton
          value="roundTrip"
          checked={data.roundTrip}
          onChange={(value) => {
            handleChangeRadio("roundTrip");
          }}
          title="Round Trip"
        />
        <RadioButton
          value="oneWay"
          checked={data.oneWay}
          onChange={(value) => {
            handleChangeRadio("oneWay");
          }}
          title="One way"
        />
      </Box>

      <Box
        display={"flex"}
        gap="12px"
        mt="24px"
        sx={{
          ".MuiFormLabel-root": {
            color: "primary",
          },
        }}
      >
        <Box display={"flex"} flexDirection="column">
          <InputTitle>Depart on</InputTitle>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={data.departOn}
              onChange={(newValue: any) => {
                handleChange("departOn", newValue);
              }}
              inputRef={departOnRef}
              renderInput={(params: any) => {
                return (
                  <TextField
                    {...params}
                    name="departOn"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          style={{ cursor: "pointer" }}
                          onClick={() => departOnRef.current?.click()}
                          position="end"
                        >
                          <CalendarMonthIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                );
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box display={"flex"} flexDirection="column">
          <InputTitle>Return on</InputTitle>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={data.returnOn}
              onChange={(newValue: any) => {
                handleChange("returnOn", newValue);
              }}
              inputRef={returnOnRef}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  name="returnOn"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        style={{ cursor: "pointer" }}
                        onClick={() => returnOnRef.current?.click()}
                        position="end"
                      >
                        <CalendarMonthIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>

      <Box display="flex" gap="12px" mt="24px">
        <CountInput
          value={data.adults}
          setValue={(value) => handleChangeCount("adults", value)}
          title="Adults"
        />
        <CountInput
          value={data.children}
          setValue={(value) => handleChangeCount("children", value)}
          title="Children"
        />
      </Box>

      <Box mt="24px">
        <CheckBox
          value={data.placeTicket}
          setValue={(value) => {
            handleChangeCheck("placeTicket", value);
          }}
          title="Place Ticket"
        />
        <CheckBox
          value={data.accomodation}
          setValue={(value) => {
            handleChangeCheck("accomodation", value);
          }}
          title="Accomodation"
        />
        <CheckBox
          value={data.rentalCar}
          setValue={(value) => {
            handleChangeCheck("rentalCar", value);
          }}
          title="Rental car"
        />
      </Box>

      <Box mt="24px">
        <InputTitle
          sx={{
            fontSize: "12px",
          }}
        >
          Chose from offer(Optional)
        </InputTitle>
        <CheckBox
          value={data.taxiPickup}
          setValue={(value) => {
            handleChangeCheck("taxiPickup", value);
          }}
          title="Taxi pickup"
        />
        <CheckBox
          value={data.garageRental}
          setValue={(value) => {
            handleChangeCheck("garageRental", value);
          }}
          title="Garage rental"
        />
        <CheckBox
          value={data.travelInsurance}
          setValue={(value) => {
            handleChangeCheck("travelInsurance", value);
          }}
          title="Travel insurance"
        />
      </Box>
      <Box
        display={"flex"}
        gap="12px"
        sx={{
          background: "white",
          height: "140px",
          bottom: 0,
          paddingTop: "1px",
          position: "fixed",
          width: "calc(100% - 24px)",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            height: 48,
            background: "white",
            "&:hover": {
              background: "#ffffff",
            },
          }}
        >
          <Typography variant="button" sx={{ color: "black" }}>
            Reset
          </Typography>
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ height: 48 }}
          disabled={
            data.departFrom !== "" && data.arriveAt !== "" ? false : true
          }
          onClick={() => {
            navigate("/booking", { state: { data } });
          }}
        >
          <Typography color="white">Search</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
