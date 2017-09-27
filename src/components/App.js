import React from 'react';
import VisibleImages from '../containers/VisibleImages';
import Header from './Header';
import * as firebase from "firebase";
import {BrowserRouter, Route} from 'react-router-dom';


var config = {
    apiKey: "AIzaSyBkxnE4x1RjMghzo8fYCpcYkYzrgPT0zBM",
    authDomain: "myreallyawsomeproject.firebaseapp.com",
    databaseURL: "https://myreallyawsomeproject.firebaseio.com",
    projectId: "myreallyawsomeproject",
    storageBucket: "",
    messagingSenderId: "766933115769"
};
firebase.initializeApp(config);


const App = () => (
    <BrowserRouter >
        <Route path="/"> 
            <div className="OneTooMany">
                <Header />
                <VisibleImages />
            </div>
        </Route >
    </BrowserRouter >
)

export default App