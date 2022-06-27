import React from "react";
import { Theme, useTheme, SxProps, Typography } from "@mui/material";

function InputTitle({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  const theme = useTheme();
  return (
    <Typography fontSize="15px" color={theme.blue} sx={sx}>
      {children}
    </Typography>
  );
}

export default InputTitle;
