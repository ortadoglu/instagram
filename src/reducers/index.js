import { combineReducers } from 'redux';
import images from './images';
import { visibilityFilter , sortOrderDiscriminant, loginState } from './filters';
import { localeReducer } from 'react-localize-redux';

const galleryApp = combineReducers({
    visibilityFilter,
    sortOrderDiscriminant,
    images,
    locale: localeReducer,
    loginState
})

export default galleryApp