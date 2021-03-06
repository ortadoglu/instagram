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

export const loginState = (state = 'Logged Off', action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return action.state
        default:
            return state
    }
}