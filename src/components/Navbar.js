import React, { useState } from "react";
import Logo from "../Images/Logoimage.jpg";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandmoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Pricing",
      icon: <CurrencyRupeeIcon />,
    },
    {
      text: "Resources",
      icon: <ImportContactsIcon />,
    },
    {
      text: "Supports",
      icon: <SupportAgentIcon />,
    },
    {
      text: "Partners",
      icon: <HandshakeIcon />,
    },
    {
      text: "Login",
      icon: <PersonPinIcon />,
    },
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
        <div className="app-title">
          <h3>WebGuard</h3>
        </div>
      </div>

      <div className="navbar-links-container">
        <a href="">
          Pricing
          <ExpandmoreIcon className="expand-icon" />
        </a>
        <a href="">Resources</a>
        <a href="">Supports</a>
        <a href="">Partners</a>
        <a href="">Login</a>
        <button className="primary-button">Sign Up</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
