import { Typography } from "@mui/material";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Typography
          variant="h6"
          component="h2"
          display="flex"
          marginTop={23}
          justifyContent="center"
          alignItems="center"
        >
          © 2024 All Rights Reserved. designd by Sushil Lowanshi
        </Typography>
      </footer>
    );
  }
}
export default Footer;
