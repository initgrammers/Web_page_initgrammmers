import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import styles from '#app/assets/styles/ContacUsButton';

const ContactUsButton = ({ variant, color, href, label, children, mr }) => {
  const classes = styles({ mr });
  return (
    <Link target="_blank" rel="noopener" href={href} className={classes.link}>
      <Button variant={variant} color={color}>
        {children || label}
      </Button>
    </Link>
  );
};
ContactUsButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'default', 'inherit']),
  href: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element,
  mr: PropTypes.number,
};
ContactUsButton.defaultProps = {
  color: 'primary',
  label: 'Contáctanos',
  href: '',
  variant: 'contained',
  children: undefined,
  mr: 0,
};
export default ContactUsButton;
