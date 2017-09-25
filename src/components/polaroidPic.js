import React from 'react';
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
            <div className="polaroid">
                <div className="innerPolaroid">
                    <p>{this.props.description}</p>
                    <img src={this.props.src} alt={this.props.description} />
                </div>
          </div>
        );
    }
}

export default PolaroidPic;
