import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterMenuItem from '../components/FilterMenuItem'

const mapStateToProps = (state, ownProps) => {
    return { active: true }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { onClick: () => {dispatch(setVisibilityFilter(ownProps.tag)) }
    }
}

const FilterMenuItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterMenuItem)

export default FilterMenuItemContainer