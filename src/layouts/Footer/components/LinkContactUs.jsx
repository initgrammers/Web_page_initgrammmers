import { PropTypes } from 'prop-types';
import styles from '../styles';
import { Link, Typography } from '@mui/material';
import { primary } from '#app/shared/config/theme/colors';

const LinkContactUs = ({ question, callToAction, href }) => {
  return (
    <>
      <Typography variant="h6" component="h3" sx={{color:primary.main}}>
        {question}
      </Typography>
      <Link target="_blank" href={href} rel="noopener" sx={{textDecoration: 'none'}}>
        <Typography variant="body2" sx={styles.action}>
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
