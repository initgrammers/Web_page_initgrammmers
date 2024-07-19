import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './style';
import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = ({
  onNextStep,
  onPrevStep,
  children,
  disableLeft,
  disableRight,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box onClick={onPrevStep}>
        <ArrowBackIosIcon
          sx={clsx(styles.arrow, {
            [styles.disableArrow]: disableLeft,
          })}
        />
      </Box>
      <Box sx={styles.imagesContent}>{children}</Box>
      <Box onClick={onNextStep}>
        <ArrowForwardIosIcon
          sx={clsx(styles.arrow, {
            [styles.disableArrow]: disableRight,
          })}
        />
      </Box>
    </Box>
  );
};
Container.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disableLeft: PropTypes.bool.isRequired,
  disableRight: PropTypes.bool.isRequired,
};

export default Container;
