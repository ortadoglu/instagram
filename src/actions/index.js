let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setImageFilter = filter => {
  return {
    type: 'SET_IMAGE_FILTER',
    filter
  }
}

export const addImage = (tag, description, date, location, src ) => {
  return {
    type: 'ADD_IMAGE',
    id: nextTodoId++,
    tag,
    description,
    date,
    location,
    src
  }
}
