import PropTypes from 'prop-types';
import CustomMenu from '../../components/Menu/CustomDrawer';

const Navigation = ({ index }) => <CustomMenu indexMenu={index} />;
Navigation.propTypes = {
  index: PropTypes.string,
};
Navigation.defaultProps = { index: 'home' };
export default Navigation;
