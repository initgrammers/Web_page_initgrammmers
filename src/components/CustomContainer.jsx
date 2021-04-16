import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import styles from '../assets/styles/CustomContainer';

const useStyles = makeStyles(styles);

const CustomContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.mainContent}>
      {children}
    </Container>
  );
};

CustomContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomContainer;
