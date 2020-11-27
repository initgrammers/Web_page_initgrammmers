import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CustomMenu from '#Components/Menu';

const useStyles = makeStyles((theme) => ({
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Navigation = ({ index }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static">
        <Toolbar className={classes.main}>
          <Hidden smDown>
            <div className={classes.title}>
              <Button className={classes.logo} aria-label="logo Initgrammers">
                <LogoInitgrammers />
              </Button>

              <Button
                aria-label="Servicios"
                aria-controls="menu-servicios"
                aria-haspopup="true"
                onClick={handleMenuServices}
                className={classes.button}
                color="inherit"
                endIcon={<ExpandMoreIcon />}
              >
                <Typography variant="body2">Servicios</Typography>
              </Button>
              <Menu
                id="menu-servicios"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openServices}
                onClose={handleClose}
              >
                <MenuItem
                  className={clsx(
                    {},
                    {
                      [classes.selected]: index === 'home',
                    }
                  )}
                  onClick={handleClose}
                >
                  <Link href="/">
                    <a>Inicio</a>
                  </Link>
                </MenuItem>
                <MenuItem
                  className={clsx({
                    [classes.selected]: index === 'WebDevelopment',
                  })}
                  onClick={handleClose}
                >
                  <Link href="/services/WebDevelopment">
                    <a>Desarrollo de aplicaciones web </a>
                  </Link>
                </MenuItem>
                <MenuItem
                  className={clsx({
                    [classes.selected]: index === 'MobileDevelopment',
                  })}
                  onClick={handleClose}
                >
                  <Link href="/services/MobileDevelopment">
                    <a>Desarrollo de aplicaciones móviles </a>
                  </Link>
                </MenuItem>

              </Menu>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <CustomDrawer
        classSelected={classes.selected}
        index={index}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      /> */}
      <CustomMenu indexMenu={index} />
    </div>
  );
};
Navigation.propTypes = {
  index: PropTypes.string,
};
Navigation.defaultProps = { index: 'home' };
export default Navigation;
