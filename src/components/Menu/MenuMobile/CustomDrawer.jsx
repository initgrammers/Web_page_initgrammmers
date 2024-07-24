import PropTypes from 'prop-types';
import ListMenu from './ListMenu';
import styles from './styles';
import { Collapse } from '@mui/material';

const CustomDrawer = ({ open = false, onClose, indexMenu }) => {
  return (
    <Collapse in={open} sx={styles.drawer} unmountOnExit>
      <ListMenu indexMenu={indexMenu} onClose={onClose} />
    </Collapse>
  );
};

CustomDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};

export default CustomDrawer;
