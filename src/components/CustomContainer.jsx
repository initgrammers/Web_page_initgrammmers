import PropTypes from 'prop-types';
import styles from '../assets/styles/CustomContainer';
import { Container } from '@mui/material';

const CustomContainer = ({ children, sx }) => {
  return (
    <Container fixed sx={{...sx, ...styles.mainContent}}>
      {children}
    </Container>
  );
};

CustomContainer.propTypes = {
  children: PropTypes.element.isRequired,
  children: PropTypes.string,
};

export default CustomContainer;
