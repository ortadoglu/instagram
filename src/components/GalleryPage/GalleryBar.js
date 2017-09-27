import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import UpwardsIcon from 'material-ui/svg-icons/communication/call-made';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TagList from '../../containers/Tags';

class GalleryBar extends React.Component {
    render() {
        return (
            <div className="GalleryBar">
            <IconButton tooltip={ this.props.translate('add_new_image') } tooltipPosition="top-center" onClick={this.props.onButtonClick}><CircleIcon /></IconButton>
            <IconMenu
                iconButtonElement={<IconButton tooltip={ this.props.translate('select_filter') } tooltipPosition="top-center"><UpwardsIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                >
                <MenuItem primaryText="Date" onClick={() => this.props.onDiscriminantClick("date")}/>
                <MenuItem primaryText="Location" onClick={() => this.props.onDiscriminantClick("location")}/>
                <MenuItem primaryText="Description" onClick={() => this.props.onDiscriminantClick("description")}/>
            </IconMenu>
            <TagList />      
        </div>
        );
    }
}
GalleryBar.propTypes = {
    onDiscriminantClick: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    translate: PropTypes.func
};
export default GalleryBar;            