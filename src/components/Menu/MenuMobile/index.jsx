import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import styles from './styles';

const useStyles = makeStyles(styles);

const AppBarMobile = ({ showDrawer, handleDrawerOpen }) => {
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
    </>
  );
};

AppBarMobile.propTypes = {
  showDrawer: PropTypes.bool,
  handleDrawerOpen: PropTypes.func.isRequired,
};
AppBarMobile.defaultProps = {
  showDrawer: false,
};

export default AppBarMobile;
