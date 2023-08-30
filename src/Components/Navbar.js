import React, { useState } from 'react';
import logo from '../Assets/images/logo3.png';
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import { BsCart2 } from "react-icons/bs";
import {HiOutlineBars2} from "react-icons/hi2";
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfosIcon from "@mui/icons-material/Info";
import CommentRounded from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Write",
            icon: <HomeIcon />
        }, {
            text: "Discussion",
            icon: <InfosIcon />
        }, {
            text: "Testimonials",
            icon: <CommentRounded />
        }, {
            text: "Contact",
            icon: <PhoneRoundedIcon />
        },
    ]
  return (
      <nav>
          <div className="nav-logo-container">
              <div>
                  <img src={logo} alt='Ped' />
                  <a href="#">Write</a>
                  <a href="#">Discussions</a>
                  <a href="#">. . .</a>
              </div>
          </div>
          <div className="navbar-links-container">
              <a href="">Home</a>
              <button className="primary-auth-button">Sign In</button>
              <button className="secondary-auth-button">Register</button>
          </div>
          <div className="navbar-menu-container">
              <HiOutlineBars2 onClick={ ()=>setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
              <Box sx={{width: 250}} role="presentation" onClick={ ()=> setOpenMenu(false)} onkeyDown={() => setOpenMenu(false)}>
                  <List>
                      {menuOptions.map((item) => (
                          <ListItem key={item.text} disabledPadding >
                              <ListItemButton>
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText primary={item.text} />
                              </ListItemButton>
                          </ListItem>
                      ))}
                  </List>
              </Box>
          </Drawer>
    </nav>
  )
}

export default Navbar