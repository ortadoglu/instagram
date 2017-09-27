export const visibilityFilter = (state = 'No filter', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export const sortOrderDiscriminant = (state= 'date' , action) => {
    switch (action.type) {
        case 'SET_SORT_ORDER':
            return action.filter
        default:
            return state
    }
}