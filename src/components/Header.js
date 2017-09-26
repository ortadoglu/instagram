import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
        <div className="Header">
            <div>text to be translated</div>
            <DropDownMenu className="Dropdown" value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="En" />
                <MenuItem value={2} primaryText="De" />
                <MenuItem value={3} primaryText="Ro" />
            </DropDownMenu>
        </div>
    );}
}

export default Header