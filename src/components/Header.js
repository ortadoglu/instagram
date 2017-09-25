import React from 'react';
import FilterLink from '../containers/FilterLink';
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
        <p className="Header">
            Show:
            {' '}
            <FilterLink filter="SHOW_ALL">
            All
            </FilterLink>
            {', '}
            <FilterLink filter="SHOW_ACTIVE">
            Active
            </FilterLink>
            {', '}
            <FilterLink filter="SHOW_COMPLETED">
            Completed
            </FilterLink>

            <DropDownMenu className="Dropdown" value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="En" />
                <MenuItem value={2} primaryText="De" />
                <MenuItem value={3} primaryText="Ro" />
            </DropDownMenu>
        </p>
    );}
}

export default Header