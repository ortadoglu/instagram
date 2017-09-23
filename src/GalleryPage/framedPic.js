import React from 'react';

class FramedPic extends React.Component {
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
            <div className="FramedPic">
                <img src={this.props.src} alt="poza" />
                <div class="desc">{this.props.description}</div>
            </div>
        );
    }
}

export default FramedPic;