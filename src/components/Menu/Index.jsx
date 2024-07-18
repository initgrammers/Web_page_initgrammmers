"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from '../../assets/styles/Menu';
import OutsideAlerter from './MenuDesktop/Outsider';
import { AppBar, Hidden, Toolbar } from '@mui/material';

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
          <Hidden mdUp>
            <MobileMenu
              showDrawer={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={indexMenu}
            />
          </Hidden>
          <Hidden smDown>
            <MenuDesktop
              showServices={showNav}
              handleDrawerOpen={handleDrawerOpen}
              handleClose={handleClose}
              indexMenu={indexMenu}
            />
          </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <OutsideAlerter callback={handleClose}>
            <CustomDrawer
              open={showNav}
              onClose={handleClose}
              indexMenu={indexMenu}
            />
          </OutsideAlerter>
        </Hidden>
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
