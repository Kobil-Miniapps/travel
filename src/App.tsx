/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import theme from "./plugins/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRouter from "./plugins/routes/AnimatedRouter";
import Header from "./components/Header";
import AuthManager from "./services/auth-services/api";
import { useEffect, useState } from "react";

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code");
  const [name, setName] = useState(localStorage.getItem("user_name"));
  useEffect(() => {
    if (!localStorage.getItem("user_name")) {
      if (!code) {
        console.log("Code gelmedi");
        AuthManager.postCreate();
      } else {
        openId(code);
      }
    }
  }, [code]);
  const openId = async (code: any) => {
    try {
      const res: any = await AuthManager.login({ code });
      setName(res.data.name);
    } catch (error) {
      console.log("App Error", error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh">
        <Router>
          <Box sx={{ height: "100vh", overflow: "hidden" }}>
            <Header name={name} />
            <AnimatedRouter code={"true"} />
            <CssBaseline />
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
