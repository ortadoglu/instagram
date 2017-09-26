import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';

const FilterMenuItem = ({ onClick, tag}) => {
    return (
        <MenuItem key={tag} primaryText={tag} value={tag} 
            onClick={e => { onClick() }}/>
    )
}

FilterMenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    tag: PropTypes.string
}

export default FilterMenuItem