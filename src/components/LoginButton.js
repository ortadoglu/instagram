import React from 'react';

import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/action/account-circle';
import XIcon from 'material-ui/svg-icons/content/clear';

import * as firebase from "firebase";

class LoginButton extends React.Component {
    
    auth() {
        var tempThis = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            tempThis.props.onLoginAnswer("Logged In");
        })
        .catch(function(error) {
            // add something here
        });
    }

    signOut() {
        var tempThis = this;
        firebase.auth().signOut().then(function() {
            tempThis.props.onLoginAnswer("Logged Off");
            }).catch(function(error) {
            // add something here
            });
    }
                
    render() {
        return (
            <div>
                { (this.props.loggedIn === 'Logged Off') &&
                    <IconButton tooltip={ this.props.translate('login') } tooltipPosition="bottom-right" onClick={()=>this.auth()}><CircleIcon /></IconButton>

                }
                { (this.props.loggedIn !== 'Logged Off') &&
                    <IconButton tooltip={ this.props.translate('logoff') } tooltipPosition="bottom-right" onClick={()=>this.signOut()}><XIcon /></IconButton>
                }
            </div>
        )
    }
}

export default LoginButton