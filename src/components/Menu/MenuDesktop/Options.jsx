/* eslint-disable no-confusing-arrow */
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import styles from '../styles/Options';
import useMenu from '#constants/Menu';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Service = ({
  title,
  subtitle,
  href,
  icon,
  indexMenu = '',
  id = '',
  handleDrawerOpen = () => {},
}) => {
  return (
    <Link href={href} legacyBehavior>
      <a style={styles.service}>
        <Button
          fullWidth
          onClick={handleDrawerOpen}
          sx={clsx(styles.button, {
            [styles.selected]: indexMenu === id,
          })}
        >
          {icon}
          <Box sx={styles.descriptionService}>
            <Typography variant="subtitle1" color="inherit">
              {title}
            </Typography>
            <Typography variant="caption" color="inherit">
              {subtitle}
            </Typography>
          </Box>
        </Button>
      </a>
    </Link>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.shape().isRequired,
  indexMenu: PropTypes.string,
  id: PropTypes.string,
  handleDrawerOpen: PropTypes.func,
};

const Options = ({ indexMenu, handleDrawerOpen }) => {
  const {t} = useTranslation(); 
  const {data} = useMenu();
  return (
    <Box sx={styles.root}>
      <Typography color="primary" sx={styles.title}>
        {t('servicesOffer')}
      </Typography>
      <Grid container spacing={4} >
        {data.map((item, index) => (
          <Grid display='flex' justifyContent='flex-start' item md={4} sm={6} xs={12} key={index}>
            <Service
              {...item}
              indexMenu={indexMenu}
              handleDrawerOpen={handleDrawerOpen}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Options.propTypes = {
  indexMenu: PropTypes.string.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default Options;
