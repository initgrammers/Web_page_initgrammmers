"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from '../../assets/styles/Menu';
import OutsideAlerter from './MenuDesktop/Outsider';
import { AppBar, Box, Toolbar } from '@mui/material';

const MobileMenu = dynamic(() => import('./MenuMobile'));
const MenuDesktop = dynamic(() => import('./MenuDesktop'));
const CustomDrawer = dynamic(() => import('./MenuMobile/CustomDrawer'));

const CustomMenu = ({ indexMenu }) => {

  const [showNav, setShowNav] = useState(false);

  const handleDrawerOpen = () => {
    setShowNav(!showNav);
  };

  const handleClose = () => setShowNav(null);

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={styles.appbar}
      >
        <Toolbar
          sx={styles.main}
        >
          <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <MobileMenu
              showDrawer={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={indexMenu}
            />
          </Box>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <MenuDesktop
              showServices={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={indexMenu}
            />
          </Box>
        </Toolbar>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
          <OutsideAlerter callback={handleClose}>
            <CustomDrawer
              open={showNav}
              onClose={handleClose}
              indexMenu={indexMenu}
            />
          </OutsideAlerter>
        </Box>
      </AppBar>
    </>
  );
};
CustomMenu.propTypes = {
  indexMenu: PropTypes.string,
};
CustomMenu.defaultProps = {
  indexMenu: '',
};
export default CustomMenu;
