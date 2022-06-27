import { FC } from "react";
import { Box, TextField } from "@mui/material";
import InputTitle from "../../../components/InputTitle";

const CustomTextField: FC<{
  title: string;
  placeholder: string;
  value: string;
  setValue: (s: string) => void;
}> = ({ title, placeholder, value, setValue }) => {
  return (
    <Box>
      <InputTitle>{title}</InputTitle>
      <TextField
        fullWidth
        variant="filled"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        size="small"
        label={placeholder}
        sx={{
          ".MuiFilledInput-root": {
            background: "transparent",
          },
          "&:focus .MuiFilledInput-root": {
            background: "transparent",
          },
          border: "1px solid #ccc",
        }}
      ></TextField>
    </Box>
  );
};

export default CustomTextField;
