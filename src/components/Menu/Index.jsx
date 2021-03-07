import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import MenuDesktop from './MenuDesktop';
import styles from '../../assets/styles/Menu';
import MobileMenu from './MenuMobile';
import CustomDrawer from './MenuMobile/CustomDrawer';
import OutsideAlerter from './MenuDesktop/Outsider';

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
      <AppBar component="nav" position="sticky" className={classes.appbar}>
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
