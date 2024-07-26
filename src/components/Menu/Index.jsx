"use client"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from '../../assets/styles/Menu';
import OutsideAlerter from './MenuDesktop/Outsider';
import { AppBar, Box, Toolbar } from '@mui/material';

const MobileMenu = dynamic(() => import('./MenuMobile'));
const MenuDesktop = dynamic(() => import('./MenuDesktop'));
const CustomDrawer = dynamic(() => import('./MenuMobile/CustomDrawer'));

const CustomMenu = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname.replace(/^\/services\//, ''));
    }
  }, [showNav]);

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
          <Box sx={{display: {xs: 'flex', md: 'none'}, width: '100%'}}>
            <MobileMenu
              showDrawer={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={currentPath}
            />
          </Box>
          <Box sx={{display: {xs: 'none', md: 'flex'},  width: '100%'}}>
            <MenuDesktop
              showServices={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={currentPath}
            />
          </Box>
        </Toolbar>
        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
          <OutsideAlerter callback={handleClose}>
            <CustomDrawer
              open={showNav}
              onClose={handleClose}
              indexMenu={currentPath}
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
export default CustomMenu;
