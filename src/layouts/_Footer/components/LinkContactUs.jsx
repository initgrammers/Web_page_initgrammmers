import { Typography, makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import styles from '../styles';

const useStyles = makeStyles(styles);

const LinkContactUs = ({ question, callToAction, href }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" color="primary">
        {question}
      </Typography>
      <Typography variant="body2" className={classes.action}>
        <Link target="_blank" href={href}>
          <a>{callToAction}</a>
        </Link>
      </Typography>
    </>
  );
};

LinkContactUs.propTypes = {
  question: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkContactUs;
