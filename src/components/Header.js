import React from 'react';
import { localize } from 'react-localize-redux';

import LanguageSelector from '../containers/LanguageSelector';


class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <LanguageSelector/>
        </div>
    );}
}

export default localize(Header, 'locale');