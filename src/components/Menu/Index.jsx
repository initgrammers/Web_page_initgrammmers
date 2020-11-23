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

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.primary.contrastText,
    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
    [theme.breakpoints.up('lg')]: {
      filter: `drop-shadow(9px 9px 16px rgba(0, 0, 0, 0.25)); color: black`,
    },
    color: theme.palette.common.black,
  },
  fade: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'white',
    boxShadow: `rgba(0, 0, 0, 0.25) 0px 4px 4px, rgba(0, 0, 0, 0.25) 0px 4px 4px inset`,
  },
}));
export default function ElevateAppBar(props) {
  const classes = useStyles();
  const [showNav, setShowNav] = useState(false);

  const handleDrawerOpen = () => {
    console.log(`Menu siperior: ${showNav}`);
    setShowNav(!showNav);
  };
  const handleClose = () => setShowNav(false);

  return (
    <>
      <AppBar component="nav">
        <Toolbar className={classes.main}>
          <Hidden xsDown>
            <Box className={classes.sectionLogo}>
              <Button className={classes.logo} aria-label="logo Initgrammers">
                <LogoInitgrammers />
              </Button>
            </Box>
            {showNav ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Hidden>
        </Toolbar>
        <Fade timeout={800} in={showNav} className={classes.fade}>
          <Box bgcolor="white">
            <OutsideAlerter callback={handleClose}>
              <Options visible={showNav} />
            </OutsideAlerter>
          </Box>
        </Fade>
      </AppBar>
    </>
  );
}
