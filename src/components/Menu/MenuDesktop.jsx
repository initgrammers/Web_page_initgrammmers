import React from 'react';
import { makeStyles, Button, Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  menuApp: {
    display: 'flex',
    alignItems: 'center',
  },

  button: {
    textTransform: 'capitalize',
    padding: `0 ${theme.spacing(2)}px`,
  },
  services: {
    textTransform: 'capitalize',
  },
}));

const menu = [
  { label: 'Portafolio', href: '#' },
  { label: '¿Quiénes somos?', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contacto', href: '#' },
];

const MenuDesktop = ({ showServices, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Box className={classes.menuApp}>
      <Box className={classes.sectionLogo}>
        <Button className={classes.logo} aria-label="logo Initgrammers">
          <LogoInitgrammers />
        </Button>
      </Box>
      <Button
        aria-label="Servicios"
        aria-controls="menu-servicios"
        aria-haspopup="true"
        onClick={handleDrawerOpen}
        color="inherit"
        endIcon={showServices ? <ExpandLess /> : <ExpandMore />}
      >
        <Typography className={classes.services} variant="body2">
          Servicios
        </Typography>
      </Button>
      {menu.map((item, key) => (
        <Link key={key} href={item.href}>
          <a className={classes.button}>
            <Typography variant="body2">{item.label}</Typography>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default MenuDesktop;
