import PropTypes from 'prop-types';
import { menuInitgrammers } from '#constants/Menu';
import ItemWithSubItemsMenu from './ItemWithSubItemsMenu';
import { List } from '@mui/material';

const ListMenu = ({ indexMenu, onClose }) => {
  return(
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
)};

ListMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};

export default ListMenu;
