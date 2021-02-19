import { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  makeStyles,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import CustomLink from '#Components/CustomLink';
import styles from './styles';

const ref = createRef();
const useStyles = makeStyles(styles);

const ItemWithSubItemsMenu = ({
  indexMenu,
  titleMenu,
  href,
  subMenu,
  onClose,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  let hasSubmenu = null;

  if (subMenu.length > 0) {
    hasSubmenu = open ? <ExpandLess /> : <ExpandMore />;
  }

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {subMenu.length > 0 ? (
        <ListItem className={clsx(classes.nested)} button onClick={handleClick}>
          <ListItemText primary={titleMenu} />
          {hasSubmenu}
        </ListItem>
      ) : (
        <CustomLink ref={ref} href={href}>
          <ListItem className={clsx(classes.nested)} button onClick={onClose}>
            <ListItemText primary={titleMenu} />
          </ListItem>
        </CustomLink>
      )}

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenu.map((item, key) => (
            <CustomLink ref={ref} key={key} href={item.href}>
              <ListItem
                button
                onClick={onClose}
                className={clsx(classes.nested, {
                  [classes.selected]: indexMenu === item.id,
                })}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </CustomLink>
          ))}
        </List>
      </Collapse>
    </>
  );
};

ItemWithSubItemsMenu.propTypes = {
  titleMenu: PropTypes.string.isRequired,
  href: PropTypes.string,
  subMenu: PropTypes.arrayOf(PropTypes.shape()),
  indexMenu: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

ItemWithSubItemsMenu.defaultProps = {
  subMenu: [],
  href: '#',
};

export default ItemWithSubItemsMenu;
