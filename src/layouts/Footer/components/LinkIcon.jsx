import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, makeStyles } from '@material-ui/core';
import styles from '../styles';

const useStyles = makeStyles(styles);

const LinkIcon = ({ icon, href, size }) => {
  const classes = useStyles();
  return (
    <Link href={href} target="_blank" rel="noopener" aria-label="Initgrammers">
      <Box width={size} height={size} className={classes.socialMedia}>
        {icon}
      </Box>
    </Link>
  );
};
LinkIcon.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
  size: PropTypes.number,
};
LinkIcon.defaultProps = {
  icon: <></>,
  size: 30,
  href: '#',
};
export default LinkIcon;
