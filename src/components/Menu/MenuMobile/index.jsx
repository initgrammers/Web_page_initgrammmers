import PropTypes from 'prop-types';
import { Button, Box, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MobileDrawer from './CustomDrawer';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import styles from './styles';

const useStyles = makeStyles(styles);

const AppBarMobile = ({
  showDrawer,
  handleDrawerOpen,
  handleClose,
  indexMenu,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.sectionLogo}>
        <IconButton
          className={classes.button}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          {showDrawer ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Button size="small" className={classes.button} href="/">
          <LogoInitgrammers />
        </Button>
      </Box>
      <MobileDrawer
        open={showDrawer}
        onClose={handleClose}
        indexMenu={indexMenu}
      />
    </>
  );
};

AppBarMobile.propTypes = {
  showDrawer: PropTypes.bool,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
};
AppBarMobile.defaultProps = {
  showDrawer: false,
};

export default AppBarMobile;
