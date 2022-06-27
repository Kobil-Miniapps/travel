import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Choice } from "./styles";

type SummaryBoxProps = {
  data: any;
};

const SummaryBox: FC<SummaryBoxProps> = ({ data }) => {
  return (
    <Box sx={{ mt: "8px" }}>
      {data.map((item: any, index: number) => (
        <React.Fragment key={"summary" + item.name + index}>
          <Choice>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {item?.imgPath && (
                <img src={item?.imgPath} alt="listbox-icon" height={32} />
              )}
              <Box sx={{ marginLeft: "6px" }}>
                <Typography variant="title2">{item.name}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="subTitle2">
                    {item.carType || item.date}
                  </Typography>
                  <Typography variant="subTitle2">, ${item.price}</Typography>
                  {item.roomType && (
                    <Typography variant="subTitle2">
                      , {item.roomType}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Choice>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SummaryBox;
