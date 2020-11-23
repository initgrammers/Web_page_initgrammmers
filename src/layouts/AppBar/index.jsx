import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import CustomDrawer from './CustomDrawer';
import CustomMenu from '#Components/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    background: theme.palette.primary.contrastText,
    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
    [theme.breakpoints.up('lg')]: {
      filter: `drop-shadow(9px 9px 16px rgba(0, 0, 0, 0.25)); color: black`,
    },
    color: theme.palette.common.black,
  },
  logo: {
    marginRigh: theme.spacing(2),
  },
  sectionLogo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'star',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    color: theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
  },
  advisory: {
    display: 'flex',
    alignItems: 'center',
  },
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  logoMovil: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

const Navigation = ({ index }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openServices = Boolean(anchorEl);

  const handleMenuServices = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static">
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
              <MenuIcon />
            </IconButton>
          </Hidden>
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
                <MenuItem
                  className={clsx({
                    [classes.selected]: index === 'PWADevelopment',
                  })}
                  onClick={handleClose}
                >
                  <Link href="/Services/PWADevelopment">
                    <a>Desarrollo de aplicaciones PWA </a>
                  </Link>
                </MenuItem>
                <MenuItem
                  className={clsx({
                    [classes.selected]: index === 'DigitalMarketing',
                  })}
                  onClick={handleClose}
                >
                  <Link href="/Services/DigitalMarketing">
                    <a>Marketing Digital </a>
                  </Link>
                </MenuItem>
                <MenuItem
                  className={clsx({
                    [classes.selected]: index === 'UXUIDesign',
                  })}
                  onClick={handleClose}
                >
                  <Link href="/Services/UXUIDesign">
                    <a>Diseño UI/UX</a>
                  </Link>
                </MenuItem>
                <MenuItem
                  className={clsx({
                    [classes.selected]: index === 'Ecommerce',
                  })}
                  onClick={handleClose}
                >
                  <Link href="/Services/Ecommerce">
                    <a>Tiendas en línea / E-commerce </a>
                  </Link>
                </MenuItem>
              </Menu>

              <Button
                aria-label="Portafolio"
                aria-haspopup="true"
                color="inherit"
                className={classes.button}
              >
                <Typography variant="body2">Portafolio</Typography>
              </Button>

              <Button
                aria-label="Portafolio"
                aria-haspopup="true"
                color="inherit"
                className={classes.button}
              >
                <Typography variant="body2">¿Quiénes somos?</Typography>
              </Button>

              <Button
                aria-label="Portafolio"
                aria-haspopup="true"
                color="inherit"
                className={classes.button}
              >
                <Typography variant="body2">Blog</Typography>
              </Button>

              <Button
                aria-label="Portafolio"
                aria-haspopup="true"
                color="inherit"
                className={classes.button}
              >
                <Typography variant="body2">Contacto</Typography>
              </Button>
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
      <CustomMenu />
    </div>
  );
};
Navigation.propTypes = {
  index: PropTypes.string,
};
Navigation.defaultProps = { index: 'home' };
export default Navigation;
