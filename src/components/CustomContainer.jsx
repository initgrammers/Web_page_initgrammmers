import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import styles from '../assets/styles/CustomContainer';

const CustomContainer = ({ children, sx }) => (
  <Container fixed sx={{ ...sx, ...styles.mainContent }}>
    {children}
  </Container>
);

CustomContainer.propTypes = {
  children: PropTypes.element.isRequired,
  sx: PropTypes.string,
};

export default CustomContainer;
