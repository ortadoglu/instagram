import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionLanguage from 'material-ui/svg-icons/action/language';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 2, open: false};
    }
    
    handleChange = (event, index, value) => this.setState({value});

    handleToggle = () => this.setState({open: !this.state.open});
    
    handleClose = () => this.setState({open: false});

    render() {
        return (<div>
            <AppBar
              title={<span >Not Instagram yet</span>}
              iconElementLeft={<IconButton><ActionHome /></IconButton>}
                iconElementRight={<IconButton onClick={() => this.handleToggle()}><ActionLanguage /></IconButton>}
             
            />
                    <Drawer openSecondary
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                  >
                    <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                  </Drawer>
                </div>
        );
    }
}

export default Header 