import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PropTypes } from 'prop-types';
import styles from '../styles';

const useStyles = makeStyles(styles);

const LinkContactUs = ({ question, callToAction, href }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" component="h3" color="primary">
        {question}
      </Typography>
      <Link target="_blank" href={href} rel="noopener">
        <Typography variant="body2" className={classes.action}>
          {callToAction}
        </Typography>
      </Link>
    </>
  );
};

LinkContactUs.propTypes = {
  question: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkContactUs;
