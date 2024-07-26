import PropTypes from 'prop-types';
import Menu from '../../components/Menu/Index';

const Navigation = () => (
  <>
    <Menu />
  </>
);
Navigation.propTypes = {
  index: PropTypes.string,
};
export default Navigation;
