import React from 'react';
import { localize } from 'react-localize-redux';

import LanguageSelector from '../containers/LanguageSelector';
import LoginContainer from '../containers/LoginButtonContainer'

class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <LoginContainer/>
            <LanguageSelector/>
        </div>
    );}
}

export default localize(Header, 'locale');