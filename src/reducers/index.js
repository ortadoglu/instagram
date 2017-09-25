import { combineReducers } from 'redux';
import todos from './todos';
import images from './images';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    images
})

export default todoApp