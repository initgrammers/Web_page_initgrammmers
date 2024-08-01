import { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CustomLink from '#Components/CustomLink';
import styles from './styles';

const ref = createRef();

const ItemWithSubItemsMenu = ({
  indexMenu,
  titleMenu,
  subMenu = [],
  href = '#',
  onClose,
}) => {
  const [open, setOpen] = useState(false);
  let hasSubmenu = null;

  if (subMenu.length > 0) {
    hasSubmenu = open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
  }

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {subMenu.length > 0 ? (
        <ListItem
          sx={{ ...styles.nested, '&:hover': { backgroundColor: 'lightgray' }, cursor: 'pointer' }}
          onClick={handleClick}
        >
          <ListItemText primary={titleMenu} />
          {hasSubmenu}
        </ListItem>
      ) : (
        <CustomLink ref={ref} href={href}>
          <ListItem sx={styles.nested} onClick={onClose}>
            <ListItemText primary={titleMenu} />
          </ListItem>
        </CustomLink>
      )}

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenu.map((item, key) => (
            <CustomLink ref={ref} key={key} href={item.href}>
              <ListItem
                onClick={onClose}
                sx={{
                  ...styles.nested,
                  ...(indexMenu === item.id && styles.selected),
                  '&:hover': { backgroundColor: 'lightgray' },
                }}
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

export default ItemWithSubItemsMenu;
