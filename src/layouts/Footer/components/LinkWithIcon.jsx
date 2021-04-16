import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from '../styles';

const useStyles = makeStyles(styles);

const LinkWithIcon = ({ icon, label, href }) => {
  const classes = useStyles();
  return (
    <Link href={href} color="inherit">
      <Box className={classes.linkIcon}>
        {icon}
        <Typography color="inherit" className={classes.iconText}>
          {label}
        </Typography>
      </Box>
    </Link>
  );
};
LinkWithIcon.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  href: PropTypes.string,
};
LinkWithIcon.defaultProps = {
  icon: <></>,
  label: '',
  href: '#',
};
export default LinkWithIcon;
