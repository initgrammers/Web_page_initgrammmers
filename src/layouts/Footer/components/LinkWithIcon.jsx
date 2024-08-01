import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';
import styles from '../styles';

const LinkWithIcon = ({ icon = <></>, label = '', href = '#' }) => (
  <Link href={href} color="inherit" sx={{ textDecoration: 'none' }}>
    <Box sx={styles.linkIcon} gap={2}>
      {icon}
      <Typography color="inherit" sx={styles.iconText}>
        {label}
      </Typography>
    </Box>
  </Link>
);

LinkWithIcon.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  href: PropTypes.string,
};
export default LinkWithIcon;
