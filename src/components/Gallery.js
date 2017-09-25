import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import PolaroidPic from './KewlPic/polaroidPic.js'
import './gallery.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AddImage from '../containers/AddImage';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
      }
    
    handleToggle = () => this.setState({open: !this.state.open});

    

    render() {
        return (
            <div className="Gallerypage">
                <div className="Gallery">
                    <div className="images">
                        {this.props.imageUrls.map(details => 
                            <PolaroidPic src={details.src} description={details.description} />
                            )}
                    </div>
                </div>  
                <div className="GalleryBar">
                    <IconButton tooltip="Add another picture" onClick={this.handleToggle}><CircleIcon /></IconButton>
                    <IconButton tooltip="Use some Filters"><FilterIcon /></IconButton>             
                </div>
                <Drawer className="AddImageForm" open={this.state.open} closeFunction={() => this.handleToggle()}>
                    <AddImage />
                    <div onClick={()=>this.handleToggle()} >
                        inchide de aici
                    </div>

                </Drawer>
            </div>      
        );
    }
}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
};
export default Gallery;