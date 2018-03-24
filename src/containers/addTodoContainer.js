import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

import AddTodoComponent from '../components/addTodoComponent';
 
const mapDispatchToprops = dispatch => ({
    addTodo: text => dispatch(addTodo(text))
});
 
export default connect(
    undefined,
    mapDispatchToprops
)(AddTodoComponent);