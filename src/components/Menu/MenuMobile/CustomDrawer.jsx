import PropTypes from 'prop-types';
import { makeStyles, Drawer } from '@material-ui/core';
import ListMenu from './ListMenu';
import styles from './styles';

const useStyles = makeStyles(styles);

const CustomDrawer = ({ open, onClose, indexMenu }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      anchor="top"
      variant="temporary"
      open={open || false}
      onClose={onClose || null}
    >
      <ListMenu indexMenu={indexMenu} onClose={onClose} />
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};
CustomDrawer.defaultProps = {
  open: false,
};

export default CustomDrawer;
