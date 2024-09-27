import React, { Component } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };
  render() {
    const { isDarkMode } = this.state;

    const theme = createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#d32f2f",
        },
      },
    });
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header
            toggleDarkMode={this.toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <Outlet />
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}
export default Layout;
