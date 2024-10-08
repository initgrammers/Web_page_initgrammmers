/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import styles from './styles';

const Subtitle = ({
  head = '',
  emphasis = '',
  tail = '',
  variant = 'h1',
  component = 'h1',
  mb = 0,
  mt = 0,
  align = 'left',
  black = false,
  white = false,
  fontSize = '',
}) => (
  <Box display="flex" mb={mb} mt={mt} justifyContent="center">
    <Typography
      component={component}
      align={align}
      variant={variant}
      sx={{
        fontSize,
        ...styles.title,
        ...(black && styles.black),
        ...(white && styles.white),
        '& span': {
          color: black
            ? styles.black['& span'].color
            : white
              ? styles.white['& span'].color
              : styles.title['& span'].color,
        },
      }}
    >
      {head}
      <span>{` ${emphasis}`}</span>
      {tail}
    </Typography>
  </Box>
);

Subtitle.propTypes = {
  head: PropTypes.string,
  emphasis: PropTypes.string,
  tail: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string,
  mb: PropTypes.number,
  mt: PropTypes.number,
  align: PropTypes.string,
  black: PropTypes.bool,
  white: PropTypes.bool,
  fontSize: PropTypes.string,
};
export default Subtitle;
