/* eslint-disable no-confusing-arrow */
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import CustomLink from '#Components/CustomLink';
import styles from '../styles/MenuDesktop';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import Options from './Options';
import OutsideAlerter from './Outsider';
import { menuInitgrammers } from '#constants/Menu';
import { Box, Button, Fade, Hidden, Typography } from '@mui/material';


const MenuDesktop = ({
  showServices = false,
  handleDrawerOpen,
  indexMenu,
  handleClose,
}) => {
  return (
    <>
      <Box sx={styles.menuApp}>
        <CustomLink href="/">
          <LogoInitgrammers />
        </CustomLink>
        <Box display='flex' justifyContent='space-between'>
          <Box display='flex' sx={styles.sectionMenu} gap={3}>
            {menuInitgrammers.menu.map((item, key) =>
              item?.items?.length > 0 ? (
                <Button
                  key={key}
                  onClick={handleDrawerOpen}
                  color="inherit"
                  endIcon={showServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  <Typography sx={styles.services} variant="body2">
                    Servicios
                  </Typography>
                </Button>
              ) : (
                <CustomLink key={key} href={item.href}>
                  <Button onClick={handleClose} sx={styles.button}>
                    <Typography variant="body2" align="center" sx={styles.services}>
                      {item.title}
                    </Typography>
                  </Button>
                </CustomLink>
              ))}
          </Box>
          <Box sx={{ display: {xs: 'none', md: 'flex'} }}>
              <ContactUsButton href={contactsLinks.general} />
          </Box>
        </Box>
      </Box>
      <Fade timeout={800} in={showServices} sx={styles.fade}>
        <Box bgcolor="white">
          <OutsideAlerter callback={handleClose}>
            <Options
              visible={showServices}
              indexMenu={indexMenu}
              handleDrawerOpen={handleDrawerOpen}
            />
          </OutsideAlerter>
        </Box>
      </Fade>
    </>
  );
};
MenuDesktop.propTypes = {
  showServices: PropTypes.bool,
  handleDrawerOpen: PropTypes.func.isRequired,
  indexMenu: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default MenuDesktop;
