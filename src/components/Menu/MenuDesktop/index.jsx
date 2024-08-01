/* eslint-disable no-confusing-arrow */
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Fade, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import CustomLink from '#Components/CustomLink';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import Options from './Options';
import useMenu from '#constants/Menu';
import LanguageSelector from '#Components/LanguageSelector';
import styles from '../styles/MenuDesktop';

const MenuDesktop = ({
  showServices = false,
  handleDrawerOpen,
  indexMenu,
  handleClose,
}) => {
  const { menuInitgrammers } = useMenu();
  const { t } = useTranslation();
  return (
    <>
      <Box sx={styles.menuApp}>
        <CustomLink href="/">
          <LogoInitgrammers />
        </CustomLink>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" sx={styles.sectionMenu} gap={3}>
            {menuInitgrammers.menu.map((item, key) =>
              item?.items?.length > 0 ? (
                <Button
                  key={key}
                  onClick={handleDrawerOpen}
                  color="inherit"
                  endIcon={showServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  <Typography sx={styles.services} variant="body2">
                    {t('services')}
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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', gap: 2 }}>
            <LanguageSelector />
            <ContactUsButton href={contactsLinks.general} />
          </Box>
        </Box>
      </Box>
      <Fade timeout={800} in={showServices} sx={styles.fade}>
        <Box bgcolor="white">
          <Options
            visible={showServices}
            indexMenu={indexMenu}
            handleDrawerOpen={handleClose}
          />
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
