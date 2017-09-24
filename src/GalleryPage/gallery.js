import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import PolaroidPic from './KewlPic/polaroidPic.js'

class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallerypage">
                <div className="Gallery">
                    <div className="images">
                        {this.props.imageUrls.map(details => 
                            <Link to={`/galery/${details.id}`} key={details.id}>
                                <PolaroidPic src={details.src} description={details.description} />
                            </Link>
                            )}

                    </div>
                </div>  
                <div className="GalleryBar">
                    <IconButton tooltip="Add another picture"><CircleIcon /></IconButton>
                    <IconButton tooltip="Use some Filters"><FilterIcon /></IconButton>             
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