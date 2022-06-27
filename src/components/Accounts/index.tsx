import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

import accounts from "../../mock/accounts.json";

const accountsImages = [
  require("../../assets/migrosBankLogo.png"),
  require("../../assets/commerzBankLogo.png"),
];

const Accounts = () => {
  const [selected, setSelected] = useState({name : "Migros Bank"}) as any;

  return (
    <Box>
      {accounts.map((obj, index) => (
        <Box
          key={obj.name + index}
          sx={{
            border: `1px solid ${
              selected?.name === obj?.name ? "#277BDF" : "#cdcdcd"
            }`,
            height: "48px",
            display: "flex",
            alignItems: "center",
            pl: "8px",
            gap: "8px",
            background: `${selected?.name === obj?.name && "#b3e5fc"}`,
          }}
          onClick={() => setSelected(obj)}
        >
          <img
            src={accountsImages[index]}
            alt="account-logo"
            style={{ height: "30px" }}
          />
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <Typography variant="title2">{obj?.name}</Typography>
            <Typography variant="subTitle2">
              {obj.id1} : {obj.id2}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          border: "1px solid #cdcdcd",
          height: "48px",
          display: "flex",
          alignItems: "center",
          pl: "12px",
          gap: "12px",
        }}
      >
        <Add color="primary" />
        <Typography variant="title2">Add bank account</Typography>
      </Box>
    </Box>
  );
};

export default Accounts;
