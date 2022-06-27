import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";

type PriceBoxProps = {
  data: any;
  mpoints?: number;
  setAmount?: (amount: number) => void;
  setLoyalityPoint?: (amount: number) => void;
  payment?: boolean;
};

const PriceBox: FC<PriceBoxProps> = ({ data, mpoints = 0, setAmount, payment = false, setLoyalityPoint }) => {
  let totalCost = 0;
  data.forEach((item: any) => {
    totalCost += isNaN(item.price) ? 0 : item.price;
  });

  useEffect(() => {
    setAmount && setAmount(totalCost > mpoints ? +(totalCost - mpoints).toFixed(2) : 1);
    setLoyalityPoint &&
      (mpoints
        ? setLoyalityPoint(totalCost > mpoints ? 0 : +(mpoints - totalCost).toFixed(2))
        : setLoyalityPoint(500));
  }, [setAmount, totalCost, mpoints, setLoyalityPoint]);

  return (
    <Box
      sx={{
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Typography variant="subTitle1" style={{ opacity: "0.5" }}>
        {payment || "Amount to be paid"}
        {payment && "Payment completed"}
      </Typography>
      <Typography variant="title1">$ {totalCost > mpoints ? +(totalCost - mpoints).toFixed(2) : 1}</Typography>
      {payment && (
          <Typography
            variant="subTitle2"
            style={{
              fontSize: ".8rem",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            Your invoices and necessary information have been sent.
          </Typography>
      )}
    </Box>
  );
};

export default PriceBox;
