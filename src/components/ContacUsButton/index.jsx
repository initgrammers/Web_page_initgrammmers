import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';

const ContactUsButton = ({ color, href, label }) => (
  <Link target="_blank" href={href} style={{ textDecoration: 'none' }}>
    <Button variant="contained" color={color}>
      {label}
    </Button>
  </Link>
);
ContactUsButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  href: PropTypes.string,
  label: PropTypes.string,
};
ContactUsButton.defaultProps = {
  color: 'primary',
  label: 'Contáctanos',
  href: '',
};
export default ContactUsButton;
