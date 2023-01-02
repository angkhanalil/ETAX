import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
const Footer = () => {
  return (
    <AppBar position="absolute" sx={{ top: "auto", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            color="black"
          >
            © 2023, Wacoal Thailand
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
