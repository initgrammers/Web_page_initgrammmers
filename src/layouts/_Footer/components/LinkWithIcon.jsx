import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@material-ui/core';

const LinkWithIcon = ({ icon, label, href }) => (
  <Link href={href}>
    <Box
      display="flex"
      alignItems="center"
      color="primary.constrastText"
      mb={2}
    >
      {icon}
      <Typography style={{ marginLeft: 16 }}>{label}</Typography>
    </Box>
  </Link>
);
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
