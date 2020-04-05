import { connect } from 'react-redux';

import actionCreators from '../redux/actionCreators';
import TodoLists from '../components/TodoLists';

const mapStateToProps = (state) => ({
    lists: state.lists
});

const mapDispatchToProps = {
    ...actionCreators
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);