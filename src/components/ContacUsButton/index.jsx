import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import styles from '#app/assets/styles/ContacUsButton';
import { useTranslation } from 'next-i18next';

const ContactUsButton = ({ variant, color, href, label, children, mr }) => {
  const classes = styles({ mr });
  const {t} = useTranslation();
  return (
    <Link target="_blank" rel="noopener" href={href} className={classes.link}>
      <Button variant={variant} color={color}>
        {t('contactUs') || children || label}
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
