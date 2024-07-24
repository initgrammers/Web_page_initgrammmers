import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import styles from './styles';
import { Box, Button, IconButton } from '@mui/material';

const AppBarMobile = ({ showDrawer = false, handleDrawerOpen }) => {

  return (
    <>
      <Box sx={styles.sectionLogo}>
        <IconButton
          sx={styles.button}
          edge="start"
          color="primary"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          {showDrawer ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Button size="small" sx={styles.button} href="/">
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

export default AppBarMobile;
