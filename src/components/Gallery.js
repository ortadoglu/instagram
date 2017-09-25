import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import PolaroidPic from './polaroidPic.js'
import './componentCSS/gallery.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AddImage from '../containers/AddImage';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    disclaimerText= "Due to some limitations of this component you can only add a link to the image you want to load. Drag and drop funtionality is on the way. Thanks for understanding";

    
    handleToggle = () => this.setState({open: !this.state.open});

    

    render() {
        return (
            <div className="Gallerypage">
                <div className="Gallery">
                    {this.props.imageUrls.map(details => 
                        <PolaroidPic src={details.src} description={details.description} />
                        )}

                </div>  
                <div className="GalleryBar">
                    <IconButton tooltip="Add another picture" tooltipPosition="top-center" onClick={this.handleToggle}><CircleIcon /></IconButton>
                    <IconButton tooltip="Use some Filters" tooltipPosition="top-center"><FilterIcon /></IconButton>             
                </div>
                <Drawer className="AddImageDrawer" open={this.state.open} closeFunction={() => this.handleToggle()}>
                    <AddImage />
                    <div className="DisclaimerText">
                        <InfoIcon className="DisclaimerIcon"/> 
                        <div>{this.disclaimerText} </div>
                    </div>
                    <ClearIcon className="CloseDrawerButton" onClick={()=>this.handleToggle()} />
                </Drawer>
            </div>      
        );
    }
}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
};
export default Gallery;