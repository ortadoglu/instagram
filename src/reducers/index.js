import { combineReducers } from 'redux';
import images from './images';
import visibilityFilter from './visibilityFilter';

const galleryApp = combineReducers({
    visibilityFilter,
    images
})

export default galleryApp