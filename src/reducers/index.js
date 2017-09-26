import { combineReducers } from 'redux';
import images from './images';
import visibilityFilter from './visibilityFilter';
import { localeReducer } from 'react-localize-redux';

const galleryApp = combineReducers({
    visibilityFilter,
    images,
    locale: localeReducer
})

export default galleryApp