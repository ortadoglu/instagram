let nextId = 100;

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

export const setSortOrder = filter => {
    return {
        type: 'SET_SORT_ORDER',
        filter
    }
}

export const addImage = (tag, description, date, location, src, selected, comments, rating ) => {
    return {
        type: 'ADD_IMAGE',
        id: nextId++,
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

export const setLogin = state => {
    return {
        type: 'SET_LOGIN',
        state
    }
}
