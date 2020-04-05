import { connect } from 'react-redux';

import actionCreators from '../redux/actionCreators';
import Settings from '../components/Settings';

const mapStateToProps = (state) => ({
    settings: state.settings
});

const mapDispatchToProps = {
    ...actionCreators
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);