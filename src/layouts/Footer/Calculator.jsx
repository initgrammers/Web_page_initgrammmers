import { Button } from '@material-ui/core';

const Calculator = () => {
  (() => {
    if (process.browser) {
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
        j.id = id; j.type = 'text/javascript';
        j.async = true;
        j.dataset.calconic = true;
        j.src = `${b}calconic.min.js`;
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(j, q);
      }
    }
  })();

  return (
    <a href="#/calculator/5fcfedf80ff8010029aa2d8d" data-calculatorid="5fcfedf80ff8010029aa2d8d">
      <Button variant="contained" color="primary">Calcular</Button>
    </a>
  );
};

export default Calculator;
