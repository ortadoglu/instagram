import React from 'react';
import VisibleImages from '../containers/VisibleImages';
import Header from './Header';
import './componentCSS/gallery.css';

const App = () => (
    <div className="OneTooMany">
        <Header />
        <VisibleImages />
    </div>
)

export default App