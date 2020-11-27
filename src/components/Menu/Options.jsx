/* eslint-disable no-confusing-arrow */
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import { data } from '#constants/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: 392,
      padding: theme.spacing(5, 10),
    },
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  service: {
    display: 'flex',
    '&:hover': {
      color: theme.palette.primary.main,
      '&>svg': {
        fill: theme.palette.primary.main,
      },
    },
  },
  descriptionService: {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  selected: {
    background: `#DADADA`,
    color: theme.palette.primary.main,
    padding: `${theme.spacing(0.5)}px 0`,
    border: 0,
    borderRadius: 5,
  },
}));

const Service = ({ title, subtitle, href, icon, indexMenu, id }) => {
  const classes = useStyles();
  console.log(indexMenu, id, '----');
  return (
    <Box display="flex" color="common.black">
      <Link href={href}>
        <a
          className={clsx(classes.service, {
            [classes.selected]: indexMenu === id,
          })}
        >
          {icon}
          <Box className={classes.descriptionService}>
            <Typography component="subtitle1" color="inherit">
              {title}
            </Typography>
            <Typography variant="caption" color="inherit">
              {subtitle}
            </Typography>
          </Box>
        </a>
      </Link>
    </Box>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.shape().isRequired,
  indexMenu: PropTypes.string,
};
Service.defaultProps = {
  indexMenu: '',
};

const Options = ({ indexMenu }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography color="primary" className={classes.title}>
        Servicios que ofrecemos
      </Typography>
      <Grid container spacing={4}>
        {data.map(
          (item, index) => (
            <Grid item md={4} sm={6} xs={12} key={index}>
              <Service {...item} indexMenu={indexMenu} />
            </Grid>
          )

          // <Grid item md={4} sm={6} xs={12} key={index}>
          //   <Service {...item} />
          // </Grid>
        )}
      </Grid>
    </Box>
  );
};

Options.propTypes = {
  indexMenu: PropTypes.string.isRequired,
};

export default Options;
