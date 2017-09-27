import { connect } from 'react-redux'
import { selectImage , setSortOrder} from '../actions'
import Gallery from '../components/Gallery'

import { getTranslate } from 'react-localize-redux';

const getVisibleImages = (images, filter) => {
    switch (filter) {
        case 'No filter':
        return images
        default :
        return images.filter(t => t.tag === filter)
    }
}

const mapStateToProps = state => {
    return {
        imageUrls: getVisibleImages(state.images, state.visibilityFilter), // add real filter
        orderDiscriminant: state.sortOrderDiscriminant,
        translate: getTranslate(state.locale)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onImageClick: id => {
        dispatch(selectImage(id))
        },
        onDiscriminantClick: id => {
        dispatch(setSortOrder(id))
        }
    }
}

const VisibleImages = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery)

export default VisibleImages