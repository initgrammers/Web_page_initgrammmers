/* eslint-disable no-confusing-arrow */
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import data from '#constants/Menu';
import styles from '../styles/Options';
import { Box, Button, Grid, Typography } from '@mui/material';

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
          sx={{
            ...styles.button,
            ...(indexMenu === id && styles.selected),
          }}          
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
  return (
    <Box sx={styles.root}>
      <Typography color="primary" sx={styles.title}>
        Servicios que ofrecemos
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
