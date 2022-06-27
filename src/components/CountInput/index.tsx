import { Box, Typography } from "@mui/material";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import InputTitle from "../InputTitle";

function CountInput({
  title,
  value,
  setValue,
}: {
  title: string;
  value: number;
  setValue: (s: number) => void;
}) {
  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const increaseValue = () => {
    setValue(value + 1);
  };
  return (
    <Box width={"100%"}>
      <InputTitle>{title}</InputTitle>
      <Box
        width={"100%"}
        p="8px"
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        justifyContent={"center"}
        border="1px solid #ccc"
      >
        <RemoveIcon
          opacity={value === 0 ? 0.5 : 1}
          color="primary"
          onClick={() => {
            decreaseValue();
          }}
        />
        <Typography
          width={"100%"}
          sx={{
            textAlign: "center",
            padding: "3px 0px",
          }}
        >
          {value}
        </Typography>
        <AddIcon
          color="primary"
          onClick={() => {
            increaseValue();
          }}
        />
      </Box>
    </Box>
  );
}

export default CountInput;
