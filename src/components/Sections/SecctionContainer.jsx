import { Container, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Subtitle from '../Subtitle';
// TODO review style and refactor
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 13.5),
    },
  },
}));
const SectionContainer = ({ children, head, emphasis, tail, variant, component }) => {
  const classes = useStyles();
  return (
    <Container component="section" className={classes.root}>
      <Subtitle
        head={head}
        emphasis={emphasis}
        tail={tail}
        variant={variant}
        component={component}
      />
      {children}
    </Container>
  );
};
SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  head: PropTypes.string,
  emphasis: PropTypes.string,
  tail: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string,
};
SectionContainer.defaultProps = {
  head: '', emphasis: '', tail: '', variant: 'h2', component: 'h2',
};
export default SectionContainer;
