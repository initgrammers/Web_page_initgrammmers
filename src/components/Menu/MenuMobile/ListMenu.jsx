import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { menuInitgrammers } from '#constants/Menu';
import ItemWithSubItemsMenu from './ItemWithSubItemsMenu';

const ListMenu = ({ indexMenu, onClose }) => (
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

ListMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};

export default ListMenu;
