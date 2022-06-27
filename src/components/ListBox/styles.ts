import { Box, styled } from "@mui/material";

export const Choice = styled(Box)<{ selected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  border: ${({ selected }) => `1px solid ${selected ? "#0277b4" : "#cdcdcd"}`};
  background-color: ${({ selected }) => (selected ? "#b3e5fc" : "#fff")};
  color: ${({ selected }) => (selected ? "#0277b4" : "#cdcdcd")};
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  cursor: pointer;
`;
