import Box from '@material-ui/core/Box';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './style';

const Container = ({
  onNextStep,
  onPrevStep,
  children,
  disableLeft,
  disableRight,
}) => {
  const classes = styles();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box onClick={onPrevStep}>
        <ArrowBackIos
          className={clsx(classes.arrow, {
            [classes.disableArrow]: disableLeft,
          })}
        />
      </Box>
      <Box className={classes.imagesContent}>{children}</Box>
      <Box onClick={onNextStep}>
        <ArrowForwardIos
          className={clsx(classes.arrow, {
            [classes.disableArrow]: disableRight,
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
