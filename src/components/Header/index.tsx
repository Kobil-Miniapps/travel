import { AppBar, Box, Typography, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
interface IHeader {
  name: any;
}
const Header = ({ name }: IHeader) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        height: 50,
        backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
        position: "sticky",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1,
      }}
    >
      {!["/", "/booking-info"].includes(window.location.pathname) && (
        <Box
          sx={{
            position: "absolute",
            border: `1px solid ${theme.blue}`,
            left: "12px",
            p: "4px 4px 0px 2px",
            borderRadius: "5px",
          }}
        >
          <ArrowBackIosNewIcon
            color="primary"
            onClick={() => navigate(-1)}
            fontSize="small"
          />
        </Box>
      )}
      <Typography alignSelf="center" variant="title3" color={theme.blue}>
        Welcome,{" "}
        <Typography variant="subTitle1" color={theme.blue}>
          {name}
        </Typography>
      </Typography>
    </AppBar>
  );
};

export default Header;
