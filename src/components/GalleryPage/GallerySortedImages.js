import React from 'react';
import PropTypes from 'prop-types';
import PolaroidPic from './PolaroidPic'
import ReactSort from 'react-sort-component';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <ReactSort 
                dataSource = {this.props.imageUrls}
                sortOptions = {{ sortField: this.props.orderDiscriminant, sortDir: "asc" }} > 
                    {(props) => <PolaroidPic 
                        src={props.src} description={props.description} full={props} onClick={() => this.props.onImageClick(props.id)} />
                    }
            </ReactSort>
        );
    }
}

Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object),
    onImageClick: PropTypes.func.isRequired,
    orderDiscriminant: PropTypes.string,
};

export default Gallery;