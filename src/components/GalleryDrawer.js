import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import Drawer from 'material-ui/Drawer';
import AddImage from '../containers/AddImage';

class GalleryDrawer extends React.Component {
    render() {
        return (
            <Drawer className="AddImageDrawer" open={this.props.state} >
                <AddImage />
                <div className="DisclaimerText">
                    <InfoIcon className="DisclaimerIcon"/> 
                    <div>{ this.props.translate('DISCLAIMER') } </div>
                </div>
             </Drawer>
        );
    }
}

GalleryDrawer.propTypes = {
    state: PropTypes.bool,
    translate: PropTypes.func
};

export default GalleryDrawer;