import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/action/account-circle';

import { getTranslate } from 'react-localize-redux';
import * as firebase from "firebase";

class LoginButton extends React.Component {


    auth() {
        
        firebase.auth().signInWithEmailAndPassword("mircea@yahoo.com", "mircea")
        .then(function(result) {
            var token = result.credential.accessToken; // You can use it to access the Google API.
            var user = result.user;
            // ...
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;


            // ...
          });

         
            }
            
    render() {
        return (
            <div>
                { (this.props.loggedIn === 'Logged Off') &&
                    <IconButton tooltip={ this.props.translate('login') } tooltipPosition="bottom-right" onClick={this.auth()}><CircleIcon /></IconButton>

                }
                { (this.props.loggedIn !== 'Logged Off') &&
                    <div className="AddImageForm">
                        altceva
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.loginState,
    translate: getTranslate(state.locale)
});

const mapDispatchToProps = dispatch => {
    return {
        onLoginAnswer: answer => { dispatch(setLogin(answer)) },
    }
}

LoginButton.propTypes = {
    onLoginAnswer: PropTypes.func,
    translate: PropTypes.func,
    loggedIn: PropTypes.string

};

LoginButton = connect(mapStateToProps)(LoginButton)

export default LoginButton

/*

       var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
                firebase.auth().signInWithPopup(provider).then(function(result) {
                    var token = result.credential.accessToken; // You can use it to access the Google API.
                    var user = result.user;
                    if (user) {
                        this.props.dispatch(setLogin("altceva"));
                    }
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
                    if (email) {
                        this.props.dispatch(setLogin("altceva"));
                    }
                });

                */