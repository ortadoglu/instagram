import React from 'react';
import { localize } from 'react-localize-redux';

import LanguageSelector from '../containers/LanguageSelector';
import LoginButton from '../containers/LimitedFunctionality'

class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <LoginButton/>
            <LanguageSelector/>
        </div>
    );}
}

export default localize(Header, 'locale');