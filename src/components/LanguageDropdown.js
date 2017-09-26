import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

class LanguageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "en"};
    }

    handleChange = (event, index, value) => {
         this.setState({value: value, });
    }

render() {
    return (
        <DropDownMenu className="Dropdown" value={this.state.value} onChange={this.handleChange}>
   { this.props.languages.map(language => 
       <MenuItem key={language.code} value={language.code} primaryText={language.code} 
            onClick={() => this.props.onLanguageClick(language.code)}
        />
   )}
     </DropDownMenu>

      );}
}

LanguageSelector.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.object),
    onLanguageClick : PropTypes.func
};

export default LanguageSelector

