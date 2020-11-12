import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, useTheme } from '@material-ui/core';

const LinkIcon = ({ icon, href }) => {
  const { palette } = useTheme();
  return (
    <Link href={href} target="_blank">
      <Box
        width={24}
        height={24}
        borderRadius={10}
        bgcolor={palette.primary.contrastText}
        ml={2}
      >
        {icon}
      </Box>
    </Link>
  );
};
LinkIcon.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
};
LinkIcon.defaultProps = {
  icon: <></>,
  href: '#',
};
export default LinkIcon;
