'use client';
import PropTypes from 'prop-types';
import { Collapse } from '@mui/material';
import ListMenu from './ListMenu';
import styles from './styles';

const CustomDrawer = ({ open = false, onClose, indexMenu }) => (
  <Collapse in={open} sx={styles.drawer} unmountOnExit>
    <ListMenu indexMenu={indexMenu} onClose={onClose} />
  </Collapse>
);

CustomDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};

export default CustomDrawer;
