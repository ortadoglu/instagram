let nextTodoId = 100

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const selectImage = id => {
  return {
    type: 'SELECT_IMAGE',
    id
  }
}

export const setImageFilter = filter => {
  return {
    type: 'SET_IMAGE_FILTER',
    filter
  }
}

export const addImage = (tag, description, date, location, src, selected, comments, rating ) => {
  return {
    type: 'ADD_IMAGE',
    id: nextTodoId++,
    tag,
    description,
    date,
    location,
    src,
    selected,
    comments,
    rating
  }
}
