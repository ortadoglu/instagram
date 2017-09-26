import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { localize } from 'react-localize-redux';


class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => {
        this.setState({value});

        
       // store.dispatch(setActiveLanguage('fr'));          import { setActiveLanguage } from 'react-localize-redux';
    }

    render() {
        return (
        <div className="Header">
            <div>text de tradus</div>
            <DropDownMenu className="Dropdown" value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="En" />
                <MenuItem value={2} primaryText="De" />
                <MenuItem value={3} primaryText="Ro" />
            </DropDownMenu>
        </div>
    );}
}

export default localize(Header, 'locale');