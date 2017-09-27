import React from 'react';
import { localize } from 'react-localize-redux';

import LanguageSelector from '../containers/LanguageSelector';
import * as firebase from "firebase";

import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/action/account-circle';




class Header extends React.Component {
    


    auth() {


        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken; // You can use it to access the Google API.
            var user = result.user;
            // ...
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        });
    }

    render() {
        return (
        <div className="Header">
            <IconButton tooltip={ this.props.translate('add_new_image') } tooltipPosition="bottom-right" onClick={this.auth}><CircleIcon /></IconButton>
            <LanguageSelector/>
        </div>
    );}
}

export default localize(Header, 'locale');