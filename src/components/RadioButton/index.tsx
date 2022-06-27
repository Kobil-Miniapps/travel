import { useRef } from "react";
import { Box, Radio } from "@mui/material";
import InputTitle from "../InputTitle";

function RadioButton({
  title,
  value,
  checked,
  onChange,
}: {
  title: string;
  value: string;
  onChange: (checked: boolean) => void;
  checked: boolean;
}) {
  const ref = useRef<any>();

  return (
    <Box
      onClick={() => {
        ref.current?.click();
      }}
      display="flex"
      alignItems={"center"}
    >
      <Radio
        inputRef={ref}
        checked={checked}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
        value={value}
        name="radio-buttons"
        sx={{
          paddingLeft: "0px",
        }}
        inputProps={{ "aria-label": "B" }}
      />
      <InputTitle>{title}</InputTitle>
    </Box>
  );
}

export default RadioButton;
