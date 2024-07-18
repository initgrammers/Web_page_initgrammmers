import PropTypes from 'prop-types';
import styles from '#app/assets/styles/ContacUsButton';
import { Button, Link } from '@mui/material';

const ContactUsButton = ({ variant, color, href, label, children, mr }) => {
  return (
    <Link target="_blank" rel="noopener" href={href} sx={styles.link}>
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
