import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

const Calculator = ({ typeButton }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (process.browser && ref.current) {
      let j;
      let q;
      const d = document;
      const gi = d.getElementById;
      const ce = d.createElement;
      const gt = d.getElementsByTagName;
      const id = 'calconic_';
      const b = 'https://cdn.calconic.com/static/js/';

      if (!gi.call(d, id)) {
        j = ce.call(d, 'script');
        j.id = id;
        j.type = 'text/javascript';
        j.async = true;
        j.dataset.calconic = true;
        j.src = `${b}calconic.min.js`;
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(j, q);
      }
    }
  }, [ref]);

  const classes = useStyles();

  return (
    <a
      ref={ref}
      // href="#/calculator/5fcfedf80ff8010029aa2d8d"
      data-calculatorid="5fcfedf80ff8010029aa2d8d"
    >
      <Button
        variant={typeButton}
        className={clsx(classes.calculator, {
          [classes.whiteText]: typeButton === 'contained',
        })}
        color="primary"
      >
        Cotiza con nuestra calculadora online
      </Button>
    </a>
  );
};

Calculator.propTypes = {
  typeButton: PropTypes.string,
};

Calculator.defaultProps = {
  typeButton: 'text',
};

export default Calculator;
