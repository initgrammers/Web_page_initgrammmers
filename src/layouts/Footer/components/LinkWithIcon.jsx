import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography, makeStyles } from '@material-ui/core';
import styles from '../styles';

const useStyles = makeStyles(styles);

const LinkWithIcon = ({ icon, label, href }) => {
  const classes = useStyles();
  return (
    <Link href={href} color="inherit">
      <Box className={classes.linkIcon}>
        {icon}
        <Typography color="inherit" className={classes.iconText}>
          {label}
        </Typography>
      </Box>
    </Link>
  );
};
LinkWithIcon.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  href: PropTypes.string,
};
LinkWithIcon.defaultProps = {
  icon: <></>,
  label: '',
  href: '#',
};
export default LinkWithIcon;
