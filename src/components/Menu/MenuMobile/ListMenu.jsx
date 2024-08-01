import PropTypes from 'prop-types';
import { List } from '@mui/material';
import ItemWithSubItemsMenu from './ItemWithSubItemsMenu';
import useMenu from '#app/constants/Menu';

const ListMenu = ({ indexMenu, onClose }) => {
  const { menuInitgrammers } = useMenu();
  return (
    <List component="nav">
      {menuInitgrammers.menu.map((item, index) => (
        <ItemWithSubItemsMenu
          key={index}
          indexMenu={indexMenu}
          titleMenu={item.title}
          href={item.href}
          iconMenu={item.icon}
          subMenu={item.items}
          onClose={onClose}
        />
      ))}
    </List>
  );
};

ListMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};

export default ListMenu;
