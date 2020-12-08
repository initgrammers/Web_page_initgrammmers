import PropTypes from 'prop-types';
import Menu from '../../components/Menu/Index';

const Navigation = ({ index }) => (
  <>
    <Menu indexMenu={index} />
  </>
);
Navigation.propTypes = {
  index: PropTypes.string,
};
Navigation.defaultProps = { index: 'home' };
export default Navigation;
