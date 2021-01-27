import React, { useState } from 'react';
import { Hidden, Toolbar, AppBar, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import MenuDesktop from './MenuDesktop';
import styles from '../../assets/styles/Menu';
import MobileMenu from './MenuMobile';

const useStyles = makeStyles(styles);

const CustomMenu = ({ indexMenu }) => {
  const classes = useStyles();

  const [showNav, setShowNav] = useState(false);

  const handleDrawerOpen = () => {
    setShowNav(!showNav);
  };

  const handleClose = () => setShowNav(null);

  return (
    <>
      <AppBar component="nav" position="sticky" bgcolor="white">
        <Toolbar className={classes.main}>
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
