import { connect } from 'react-redux'

import TodoListComponent from '../components/todoListComponent'
 
const mapStateToProps = state => ({
  todos: state.todos
})
 
export default connect(
    mapStateToProps,
    undefined
)(TodoListComponent);