import {
  AppBar,
  Box,
  Container,
  IconButton,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

class Header extends Component {
  render() {
    const { toggleDarkMode, isDarkMode } = this.props;

    return (
      <>
        <AppBar position="static">
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Typography variant="h4" component="h2">
              <MuiLink
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                PRECIOUS
              </MuiLink>
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
              <MuiLink
                component={RouterLink}
                to="/task"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                TASK
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/info"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                INFO
              </MuiLink>
            </Box>

            <IconButton onClick={toggleDarkMode} color="inherit">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Container>
        </AppBar>
      </>
    );
  }
}

export default Header;
