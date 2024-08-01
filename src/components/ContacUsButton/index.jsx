import PropTypes from 'prop-types';
import { Button, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from '#app/assets/styles/ContacUsButton';

const ContactUsButton = ({
  color = 'primary',
  label = '',
  href = '',
  variant = 'contained',
  children = undefined,
  mr = 0,
}) => {
  const { t } = useTranslation();
  return (
    <Link target="_parent" rel="noopener" href={href} sx={styles.link(mr)}>
      <Button variant={variant} color={color}>
        {label || t('contactUs') || children}
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
export default ContactUsButton;
