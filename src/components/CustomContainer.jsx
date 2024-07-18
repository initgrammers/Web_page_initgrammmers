import PropTypes from 'prop-types';
import styles from '../assets/styles/CustomContainer';
import { Container } from '@mui/material';

const CustomContainer = ({ children }) => {
  return (
    <Container fixed sx={styles.mainContent}>
      {children}
    </Container>
  );
};

CustomContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomContainer;
