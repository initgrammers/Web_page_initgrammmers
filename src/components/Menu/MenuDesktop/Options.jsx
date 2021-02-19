/* eslint-disable no-confusing-arrow */
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import data from '#constants/Menu';
import styles from '../styles/Options';

const useStyles = makeStyles(styles);

const Service = ({
  title,
  subtitle,
  href,
  icon,
  indexMenu,
  id,
  handleDrawerOpen,
}) => {
  const classes = useStyles();
  return (
    <Link href={href}>
      <a className={classes.service}>
        <Button
          fullWidth
          onClick={handleDrawerOpen}
          className={clsx(classes.button, {
            [classes.selected]: indexMenu === id,
          })}
        >
          {icon}
          <Box className={classes.descriptionService}>
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
Service.defaultProps = {
  indexMenu: '',
  id: '',
  handleDrawerOpen: () => {},
};

const Options = ({ indexMenu, handleDrawerOpen }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography color="primary" className={classes.title}>
        Servicios que ofrecemos
      </Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
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
