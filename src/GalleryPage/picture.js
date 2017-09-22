import React from 'react';
import { Link } from 'react-router-dom'

class Picture extends React.Component {
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
            <div className="spinner">sometes
                <span className="spinner" />
            </div>
        );
      }

    render() {
        return (
            <div className="PictureFrame" >
                {this.renderSpinner()}
                <Link to={`/galery/${this.props.imageId}`}>
                    <img src={this.props.imageUrl} alt="poza" />
                </Link>
            </div>
        );
    }
}

export default Picture;