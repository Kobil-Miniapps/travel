import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Accounts from "../../components/Accounts";
import InputTitle from "../../components/InputTitle";
import PriceBox from "../../components/PriceBox";
import SummaryBox from "../../components/SummaryBox";
import PaymentSheet from "canarc-paymentsheet";
import MTravelSvg from "../../assets/mTravel";
import AppManager from "../../services/app-services/api";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as any;
  const [selected, setSelected] = useState(false);
  const [isPaymentSheetVisible, setIsPaymentSheetVisible] = useState(false);
  const [amount, setAmount] = useState(0);
  const [loyalityPoint, setLoyalityPoint] = useState(500);

  const handleMessage = (type: string) => {
    switch (type) {
      case "flight":
        return "Your flight invoice is as follows. Have a nice flight...";
      case "car":
        return "Your rental car bill is as follows. Have a pleasant trip...";
      case "hotel":
        return "Your hotel invoice is as follows. Have a nice vacation...";
      default:
        return "";
    }
  };
  const handlePayment = async () => {
    setIsPaymentSheetVisible(false);
    setTimeout(() => {
      navigate("/booking-info", { state: state });
    }, 1000);
    var item: any;
    for (item of Object.values(state)) {
      await AppManager.attachmentMessage({
        type: item?.type,
        message: handleMessage(item.type),
      });
    }
    selected &&
      setTimeout(() => {
        AppManager.travelMessage(
          "500 TL of the amount was paid out of Loyality. Have a nice shopping.."
        );
      }, 1000);
  };
  return (
    <Box
      sx={{
        height: "calc(100vh)",
        position: "relative",
        overflow: "hidden",
        padding: "0px 12px",
        paddingBottom: "120px",
        background: "white",
      }}
    >
      <Box sx={{ overflow: "scroll", height: "100%", pb: "50px" }}>
        <Box
          sx={{
            position: "sticky",
            top: "0px",
            zIndex: 100,
            mt: "50px",
            mb: "50px",
            background: "white",
          }}
        >
          <PriceBox
            data={Object.values(state)}
            mpoints={selected ? 500 : 0}
            setAmount={setAmount}
            setLoyalityPoint={setLoyalityPoint}
          />
        </Box>
        <SummaryBox data={Object.values(state)} />

        <InputTitle sx={{ margin: "25px 0px 10px" }}>Your mPoints</InputTitle>
        <Box
          sx={{
            border: `1px solid ${selected ? "#277BDF" : "#cdcdcd"}`,
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: `${selected && "#b3e5fc"}`,
          }}
          onClick={() => setSelected(!selected)}
        >
          <Typography
            variant="title2"
            style={{ flexGrow: 1, marginLeft: "5px" }}
          >
            Loyality partner - mPoints
          </Typography>
          <Typography
            variant="title1"
            style={{ marginRight: "10px", fontSize: "1rem" }}
          >
            {loyalityPoint}
          </Typography>
        </Box>

        <Typography
          variant="subTitle2"
          style={{
            fontSize: ".8rem",
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          Click to use your loyality points for this booking
        </Typography>

        <InputTitle sx={{ margin: "10px 0px" }}>Your Accounts</InputTitle>
        <Accounts />
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
          bottom: "100px",
          maxWidth: "94%",
        }}
        onClick={() => setIsPaymentSheetVisible(true)}
      >
        <Typography variant="button">Complete Payment</Typography>
      </Button>

      <PaymentSheet
        isVisible={isPaymentSheetVisible}
        setIsVisible={setIsPaymentSheetVisible}
        onSuccess={handlePayment}
        workplaceName="M-Travel"
        workplaceLogo={<MTravelSvg />}
        balance="10000 USD"
        amount={String(amount) + " USD"}
      />
    </Box>
  );
};

export default Payment;
