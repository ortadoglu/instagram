import React from 'react';
import PropTypes from 'prop-types';
import FramedPic from './framedPic.js';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="GalleryBar">
                <IconButton><CircleIcon /></IconButton>
                <IconButton><FilterIcon /></IconButton>
                
                </div>
            <div className="gallery">
                <div className="images">
                    {this.props.imageUrls.map(details => 
                        <Link to={`/galery/${details.id}`}>
                            <FramedPic key={details.id} src={details.src} description={details.description} />
                        </Link>
                        )}

                </div>
            </div>    
          </div>      
        );
    }
}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
};
export default Gallery;

//<Picture key={imageUrl.id} imageUrl={imageUrl.src} imageId={imageUrl.id}/>