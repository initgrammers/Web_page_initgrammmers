import React, { useState } from 'react';
import {
  Button,
  Fade,
  Box,
  Hidden,
  Toolbar,
  AppBar,
  makeStyles,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Options from './Options';
import OutsideAlerter from '../Outsider';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import MenuDesktop from './MenuDesktop';
import CustomDrawer from './CustomDrawer';
import styles from '../../assets/styles/Menu';

const useStyles = makeStyles(styles);

export default function CustomMenu({ indexMenu }) {
  const classes = useStyles();

  const [showNav, setShowNav] = useState(false);

  const handleDrawerOpen = () => {
    setShowNav(!showNav);
  };

  const handleClose = () => setShowNav(null);

  return (
    <>
      <AppBar component="nav">
        <Toolbar className={classes.main}>
          <Hidden mdUp>
            <Box className={classes.sectionLogo}>
              <Button className={classes.logo} aria-label="logo Initgrammers">
                <LogoInitgrammers />
              </Button>
            </Box>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              {showNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <MenuDesktop
              showServices={showNav}
              handleDrawerOpen={handleDrawerOpen}
            />
          </Hidden>
        </Toolbar>
        <Fade timeout={800} in={showNav} className={classes.fade}>
          <Box bgcolor="white">
            {/* <CustomDrawer open={showNav} handleDrawerOpen={handleDrawerOpen} /> */}
            {/* <Options /> */}
            <OutsideAlerter callback={handleClose}>
              <Options visible={showNav} indexMenu={indexMenu} />
            </OutsideAlerter>
            sadasd
          </Box>
        </Fade>
      </AppBar>
    </>
  );
}
