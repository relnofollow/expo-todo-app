import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import actionCreators from '../redux/actionCreators';

const mapStateToProps = (state, ownProps) => ({
    list: state.lists.find(list => list.id === ownProps.route.params.listId),
    settings: state.settings
});

const mapDispatchToProps = {
    ...actionCreators
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);