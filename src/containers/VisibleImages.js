import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Gallery from '../components/Gallery'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    imageUrls: getVisibleTodos(state.images, "SHOW_ALL")
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