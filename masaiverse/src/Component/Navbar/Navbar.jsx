import { Button, Box } from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <Box className="header">
        <Box className="navbar_left">
          <a href="/">
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
              alt="logo"
            />
          </a>
        </Box>
        <Box className="navbar_middle">
          <UnorderedList style={{ listStyle: "none" }}>
            <ListItem className="li"> HOME </ListItem>
            <ListItem className="li">ABOUT</ListItem>
            <ListItem className="li"> PROJECT</ListItem>
            <ListItem className="li">SKILL</ListItem>
          </UnorderedList>
        </Box>
        <Box className="navbar_right">
          <Button className="button navbar_button1">REFER & EARN</Button>
          <Button className="button navbar_button2">SIGN UP</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
