import PropTypes from 'prop-types';
import Menu from '../../components/Menu/Index';

const Navigation = ({ index = 'home' }) => (
  <>
    <Menu indexMenu={index} />
  </>
);
Navigation.propTypes = {
  index: PropTypes.string,
};
export default Navigation;
