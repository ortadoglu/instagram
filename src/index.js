import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import galleryApp from './reducers';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css'
import { localeReducer as locale } from 'react-localize-redux';

let store = createStore(galleryApp)

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)