import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import UpwardsIcon from 'material-ui/svg-icons/communication/call-made';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import PolaroidPic from './polaroidPic.js'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AddImage from '../containers/AddImage';
import TagList from '../containers/Tags';

import ReactSort from 'react-sort-component';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    disclaimerText= "Due to some limitations of this component you can only add a link to the image you want to load. Drag and drop funtionality is on the way. Thanks for understanding";

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div className="GalleryPage">
                <div className="Gallery">
                    <ReactSort className="Gallery"
                        dataSource = {this.props.imageUrls}
                        sortOptions = {{ sortField: this.props.orderDiscriminant, sortDir: "asc" }} > 
                            {(props) => <PolaroidPic 
                                src={props.src} description={props.description} full={props} onClick={() => this.props.onImageClick(props.id)} />
                            }
                    </ReactSort>
                </div>  
                <div className="GalleryBar">
                    <IconButton tooltip={ this.props.translate('add new image') } tooltipPosition="top-center" onClick={this.handleToggle}><CircleIcon /></IconButton>
                    <IconMenu
                        iconButtonElement={<IconButton tooltip={ this.props.translate('select filter') } tooltipPosition="top-center"><UpwardsIcon /></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        >
                        <MenuItem primaryText="Date" onClick={() => this.props.onDiscriminantClick("date")}/>
                        <MenuItem primaryText="Location" onClick={() => this.props.onDiscriminantClick("location")}/>
                        <MenuItem primaryText="Description" onClick={() => this.props.onDiscriminantClick("description")}/>
                    </IconMenu>
                    <TagList />      
                </div>
                <Drawer className="AddImageDrawer" open={this.state.open} closeFunction={() => this.handleToggle()}>
                    <AddImage />
                    <div className="DisclaimerText">
                        <InfoIcon className="DisclaimerIcon"/> 
                        <div>{ this.props.translate('DISCLAIMER') } </div>
                    </div>
                    <ClearIcon className="CloseDrawerButton" onClick={()=>this.handleToggle()} />
                </Drawer>
            </div>      
        );
    }
}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
    orderDiscriminant: PropTypes.string,
    onImageClick: PropTypes.func.isRequired,
    onDiscriminantClick: PropTypes.func.isRequired,
    translate: PropTypes.object
};
export default Gallery;