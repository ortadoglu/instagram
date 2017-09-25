import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "1"};
    }

    handleChangeSingle = (event, value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                onChange={this.handleChangeSingle}
                value={this.state.value}
                multiple={false}
                >
                <MenuItem key="nofilter" value="1" primaryText="No filter" />
                {this.props.tags.map(tag => (
                    <MenuItem key={tag} primaryText={tag} value={tag} />
                ))}

            </IconMenu>  

    );}
}

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired
};
export default TagList