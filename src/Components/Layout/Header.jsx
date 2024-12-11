import React, { useState } from 'react';
import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { NavLink } from "react-router-dom";
import "../../Styles/HeaderStyle.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Drawer state:", !mobileOpen);
  };

  // Menu drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1 }}>
        <FastfoodIcon />
        Alifing Restaurant
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
      <li>
          <NavLink to="/Register" className={({ isActive }) => (isActive ? "active" : "")}>Registration</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton 
              color="inherit" 
              aria-label="open drawer"
              edge="start" 
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className='typo' color={'goldenrod'} variant='h6' component="div" sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
              <Link to="/menu" className='link'>
                Alifing Restaurant
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navigation-menu'>
              <li>
          <NavLink to="/Register" className={({ isActive }) => (isActive ? "active" : "")}>Registration</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        </li>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer 
            variant="temporary" 
            open={mobileOpen} 
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
}

export default Header;
