import React from 'react';
import { Link } from 'react-router-dom'

const player =    {
    id: 1,
    tag: "branza",
    description: "despre branza",
    date: "",
    location: "",
    src: "https://cdn.thinglink.me/api/image/860951843818176512/1240/10/scaletowidth"
}

class EditPicturePage extends React.Component {
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
            <div className="PictureFrame">
                <img src={player.src} alt="poza" />
                <Link to="/galery">Back</Link>
            </div>
        );
    }
}

export default EditPicturePage;