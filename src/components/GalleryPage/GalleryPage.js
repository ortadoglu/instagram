import React from 'react';
import PropTypes from 'prop-types';

import GalleryBar from './GalleryBar';
import SortedGallery from './GallerySortedImages'
import GalleryDrawer from './GalleryDrawer'

import './gallery.css';

class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {drawerOpen: false};
    }

    handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

    render() {
        return (
            <div className="GalleryPage">
                <div className="Gallery">
                    <SortedGallery imageUrls={this.props.imageUrls} orderDiscriminant={this.props.orderDiscriminant} onImageClick={this.props.onImageClick}/>
                </div>  
                <GalleryBar onDiscriminantClick={this.props.onDiscriminantClick} translate={this.props.translate} onButtonClick={this.handleToggle}/>
                <GalleryDrawer translate={this.props.translate} state={this.state.drawerOpen} />
            </div>      
        );
    }
}

GalleryPage.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
    orderDiscriminant: PropTypes.string,
    onImageClick: PropTypes.func.isRequired,
    onDiscriminantClick: PropTypes.func.isRequired,
    translate: PropTypes.func
};

export default GalleryPage;