import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="asset/logo.png" alt="Kitty Katty!" className="nav-logo" />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            e-TAX THAIWACOAL
          </Typography> */}
          {/* *************************** */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            Wacoal Thailand
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
