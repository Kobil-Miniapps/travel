import { useRef } from "react";
import { Checkbox as MuiCheckBox, Box } from "@mui/material";
import InputTitle from "../InputTitle";
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
} from "@mui/icons-material";

function CheckBox({
  title,
  value,
  setValue,
}: {
  title: string;
  value: boolean;
  setValue: (s: boolean) => void;
}) {
  const ref = useRef<any>();
  return (
    <Box
      border="1px solid #ccc"
      display={"flex"}
      justifyContent="space-between"
      alignItems={"center"}
      pl="8px"
      pt="2px"
      pb="2px"
      onClick={(e) => {
        ref.current?.click();
      }}
    >
      <InputTitle>{title}</InputTitle>
      <MuiCheckBox
        inputRef={ref}
        checked={value}
        onChange={(event) => {
          event.preventDefault();
          setValue(event.target.checked);
        }}
        sx={{
          ".MuiCheckbox-root": {
            color: "blue",
          },
        }}
        checkedIcon={<CheckBoxIcon color="primary" />}
        icon={<CheckBoxOutlineBlankIcon color="primary" />}
      />
    </Box>
  );
}

export default CheckBox;
