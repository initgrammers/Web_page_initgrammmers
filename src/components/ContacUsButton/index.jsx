import PropTypes from 'prop-types';
import { Button, Link } from '@mui/material';
import { useTranslations } from 'next-intl';
import styles from '#app/assets/styles/ContacUsButton';

const ContactUsButton = ({
  color = 'primary',
  label = '',
  href = '',
  variant = 'contained',
  children = undefined,
  mr = 0,
  sx,
}) => {
  const t = useTranslations('Index');
  return (
    <Link target="_parent" rel="noopener" href={href} sx={styles.link(mr)}>
      <Button variant={variant} color={color} sx={sx}>
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
  sx: PropTypes.string,
};
export default ContactUsButton;
