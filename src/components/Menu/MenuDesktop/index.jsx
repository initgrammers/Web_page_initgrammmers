/* eslint-disable no-confusing-arrow */
import {
  makeStyles,
  Button,
  Box,
  Typography,
  Hidden,
  Fade,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Image from 'next/image';
import LogoInitgrammers from '#svg/LogoInitgrammers';
import CustomLink from '#Components/CustomLink';
import styles from '../styles/MenuDesktop';
import ContactUsButton from '#Components/ContacUsButton';
import { contactsLinks } from '#app/constants/contacts';
import Options from './Options';
import OutsideAlerter from './Outsider';
import { menuInitgrammers } from '#constants/Menu';

const useStyles = makeStyles(styles);

const MenuDesktop = ({
  showServices,
  handleDrawerOpen,
  indexMenu,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuApp}>
        <CustomLink href="/">
          <Image
            src="/assets/svg/logo-initgrammers.svg"
            width="140"
            height="24"
            alt="logo"
            priority
          />
        </CustomLink>
        <Box className={classes.sectionMenu}>
          {menuInitgrammers.menu.map((item, key) =>
            item?.items?.length > 0 ? (
              <Button
                key={key}
                onClick={handleDrawerOpen}
                color="inherit"
                endIcon={showServices ? <ExpandLess /> : <ExpandMore />}
              >
                <Typography className={classes.services} variant="body2">
                  Servicios
                </Typography>
              </Button>
            ) : (
              <CustomLink key={key} href={item.href}>
                <Button onClick={handleClose} className={classes.button}>
                  <Typography variant="body2" align="center">
                    {item.title}
                  </Typography>
                </Button>
              </CustomLink>
            )
          )}
        </Box>
        <Box>
          <Hidden mdDown>
            <ContactUsButton href={contactsLinks.general} />
          </Hidden>
        </Box>
      </Box>
      <Fade timeout={800} in={showServices} className={classes.fade}>
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
MenuDesktop.defaultProps = {
  showServices: false,
};
export default MenuDesktop;
