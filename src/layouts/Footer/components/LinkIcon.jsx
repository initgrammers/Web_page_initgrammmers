import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import styles from '../styles';

const LinkIcon = ({ icon = <></>, size = 30, href = '#' }) => (
  <Link href={href} target="_blank" rel="noopener" aria-label="Initgrammers">
    <Box width={size} height={size} sx={styles.socialMedia}>
      {icon}
    </Box>
  </Link>
);

LinkIcon.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
  size: PropTypes.number,
};
export default LinkIcon;
