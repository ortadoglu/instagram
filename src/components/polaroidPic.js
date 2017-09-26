import React from 'react';
import PropTypes from 'prop-types'
import './componentCSS/polaroidPic.css';

class PolaroidPic extends React.Component {
    constructor (){
        super();
        this.state = {loading: true};
    }

    renderSpinner() {
        if (!this.state.loading) {
          // Render nothing if not loading 
          return null;
        }
        return (
            <div className="spinner">
                <span className="spinner" />
            </div>
        );
      }

    render() {
        return (
            <div className="polaroid" onClick={this.props.onClick}>
                <div className="innerPolaroid">
                    <p>{this.props.description}</p>
                    <img src={this.props.src} alt={this.props.description} />
                </div>
                {this.props.full.selected  && 
                    <div className="description">
                        <div>Location: {this.props.full.location}</div>
                        <div>Tag: {this.props.full.tag}</div>
                        <div>Rating: {this.props.full.rating}</div>
                        <div>Comments: </div>
                    </div>}
          </div>
        );
    }
}

PolaroidPic.propTypes = {
    onClick: PropTypes.func.isRequired,

}

export default PolaroidPic;
