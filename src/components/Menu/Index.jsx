'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import dynamic from 'next/dynamic';
import OutsideAlerter from './MenuDesktop/Outsider';
import styles from '../../assets/styles/Menu';

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
          <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <MobileMenu
              showDrawer={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={currentPath}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }}>
            <MenuDesktop
              showServices={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={currentPath}
            />
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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

export default CustomMenu;
