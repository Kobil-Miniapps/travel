import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Forum as ChatIcon, Info as InfoIcon } from "@mui/icons-material";
import { Choice } from "./styles";
import InputTitle from "../InputTitle";

type ListBoxProps = {
  data: any;
  title?: string;
  selected?: any;
  setSelected?: (item: any) => void;
};

export const ListBox: FC<ListBoxProps> = ({
  data,
  title,
  selected,
  setSelected,
}) => {
  const handleClick = (item: any) => {
    setSelected &&
      title === "Flight" &&
      setSelected({ ...selected, flight: item });

    setSelected &&
      title === "Hotel" &&
      setSelected({ ...selected, hotel: item });

    setSelected &&
      title === "Rental Car" &&
      setSelected({ ...selected, car: item });
  };

  return (
    <Box sx={{ my: "12px" }}>
      {title && <InputTitle sx={{ mb: "6px" }}>Choose {title}</InputTitle>}
      {data.map((item: any, index: number) => (
        <React.Fragment key={item.name + index}>
          <Choice
            selected={item.name === selected[`${item.type}`]?.name}
            onClick={() => handleClick(item)}
          >
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
            <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <ChatIcon />
              <InfoIcon />
            </Box>
          </Choice>
        </React.Fragment>
      ))}
    </Box>
  );
};
