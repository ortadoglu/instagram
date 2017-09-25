import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Gallery from '../components/Gallery'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_FILTERED':
      return todos.filter(t => t.tag == filter)
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.Id == "");
    default :
      return todos.filter(t => t.tag == filter)
  }
}

const mapStateToProps = state => {
  return {
    imageUrls: getVisibleTodos(state.images, "SHOW_ALL") // add real filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleImages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)

export default VisibleImages