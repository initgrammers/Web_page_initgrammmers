import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Link from 'next/link';
import CustomLink from '#Components/CustomLink';

const useStyles = makeStyles((theme) => ({
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CustomDrawer({
  open,
  handleDrawerOpen,
  classSelected,
  index,
}) {
  const classes = useStyles();

  const [openService, setOpenService] = React.useState(false);

  const handleClick = () => {
    setOpenService(!openService);
  };

  return (
    <div>
      <Drawer
        className={classes.fullList}
        anchor="top"
        open={open}
        onClose={handleDrawerOpen}
      >
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Servicios" />
            {openService ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openService} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'WebDevelopment',
                })}
              >
                <Link href="/services/WebDevelopment">
                  <a>Desarrollo de aplicaciones web </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'MobileDevelopment',
                })}
              >
                <Link href="/services/MobileDevelopment">
                  <a>Desarrollo de aplicaciones móviles </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'UXUIDesign',
                })}
              >
                <Link href="/services/UXUIDesign">
                  <a>Diseño UI/UX</a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'PWADevelopment',
                })}
              >
                <Link href="/services/PWADevelopment">
                  <a>Desarrollo de aplicaciones PWA </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'Ecommerce',
                })}
              >
                <Link href="/services/Ecommerce">
                  <a>Tiendas en línea / E-commerce </a>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerOpen}
                className={clsx(classes.nested, {
                  [classSelected]: index === 'DigitalMarketing',
                })}
              >
                <Link href="/services/DigitalMarketing">
                  <a>Marketing Digital </a>
                </Link>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <CustomLink href="/services/Portfolio">
              <ListItemText primary="Portafolio" />
            </CustomLink>
          </ListItem>
          <ListItem button>
            <CustomLink href="/services/AboutUs">
              <ListItemText primary="¿Quiénes somos?" />
            </CustomLink>
          </ListItem>
          <ListItem button>
            <CustomLink href="/services/Blog">
              <ListItemText primary="Blog" />
            </CustomLink>
          </ListItem>
          <ListItem button>
            <CustomLink href="/services/ContactUs">
              <ListItemText primary="Contacto" />
            </CustomLink>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

CustomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  classSelected: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
