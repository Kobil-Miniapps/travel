import { Box, styled } from "@mui/material";

export const BookButton = styled(Box)`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 96%;
  height: 50px;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 1.2rem;
  margin: 50px 15px 30px 15px;
`;

export const Container = styled(Box)`
  background-color: #fff;
  height: 85%;
  overflow: scroll;
`;

export const ButtonContainer = styled(Box)`
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 15%;
  width: 100%;
`;
