import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
    render() {
        return (
            <div className="Details">
                <div>{this.props.details.tag}</div>
                <div>{this.props.details.description}</div>
                <div>{this.props.details.date}</div>
                <div>{this.props.details.location}</div>
            </div>          
        );
    }
}

export default Details;