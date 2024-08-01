import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './style';

const Container = ({
  onNextStep,
  onPrevStep,
  children,
  disableLeft,
  disableRight,
}) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Box onClick={onPrevStep}>
      <ArrowBackIosIcon
        sx={{
          ...styles.arrow,
          ...(disableLeft && styles.disableArrow),
        }}
      />
    </Box>
    <Box sx={styles.imagesContent}>{children}</Box>
    <Box onClick={onNextStep}>
      <ArrowForwardIosIcon
        sx={{
          ...styles.arrow,
          ...(disableRight && styles.disableArrow),
        }}
      />
    </Box>
  </Box>
);

Container.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disableLeft: PropTypes.bool.isRequired,
  disableRight: PropTypes.bool.isRequired,
};

export default Container;
