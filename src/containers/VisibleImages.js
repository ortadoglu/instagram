import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Gallery from '../components/Gallery'

const getVisibleImages = (images, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return images
    default :
      return images.filter(t => t.tag === filter)
  }
}

const mapStateToProps = state => {
  return {
    imageUrls: getVisibleImages(state.images, state.visibilityFilter) // add real filter
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