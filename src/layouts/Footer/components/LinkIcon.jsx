import PropTypes from 'prop-types';
import styles from '../styles';
import { Box, Link } from '@mui/material';

const LinkIcon = ({
  icon = <></>,
  size = 30,
  href = '#',
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener" aria-label="Initgrammers">
      <Box width={size} height={size} sx={styles.socialMedia}>
        {icon}
      </Box>
    </Link>
  );
};
LinkIcon.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
  size: PropTypes.number,
};
export default LinkIcon;
