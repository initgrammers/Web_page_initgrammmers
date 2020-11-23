import React, { useState } from 'react';
import {
  Button,
  Fade,
  Box,
  useScrollTrigger,
  Toolbar,
  AppBar,
  makeStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Options from './Options';
import OutsideAlerter from '../Outsider';

const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Universal_Pictures_Bylineless_Logo.svg/1200px-Universal_Pictures_Bylineless_Logo.svg.png';

// Function to fixed Appbar on Top
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  fade: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'white',
  },
}));
export default function ElevateAppBar(props) {
  const [showNav, setShowNav] = useState(false);
  const classes = useStyles();
  const handleClose = () => setShowNav(false);
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar style={{ padding: 16 }}>
            <Button onClick={() => setShowNav((prev) => !prev)}>
              <Menu />
            </Button>
            <img src={logo} alt="logo" width={100} />
          </Toolbar>
          <Fade timeout={800} in={showNav} className={classes.fade}>
            <Box bgcolor="white">
              <OutsideAlerter callback={handleClose}>
                <Options visible={showNav} />
              </OutsideAlerter>
            </Box>
          </Fade>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
