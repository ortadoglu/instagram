import React from 'react';
import PropTypes from 'prop-types';
import Picture from './picture.js';

class Gallery extends React.Component {


    render() {
        return (
            <div className="gallery">
                <div className="images">
                    {this.props.imageUrls.map(imageUrl => <Picture key={imageUrl.id} imageUrl={imageUrl.src} imageId={imageUrl.id}/>)}
                </div>
          </div>          
        );
    }
}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
};
export default Gallery;