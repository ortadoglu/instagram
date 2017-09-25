import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import TagsFilterDropdown from '../components/TagsFilterDropdown';

const getTags = (images) => {
    let a = [];
    images.filter(t => { 
        if ( a.indexOf(t.tag) === -1) a.push(t.tag); 
    });
    return a;
}

const mapStateToProps = state => {
  return {
    tags: getTags(state.images) 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
          }
    }
}

const Tags = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsFilterDropdown)

export default Tags