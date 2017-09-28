import { connect } from 'react-redux';
import { setLogin } from '../actions';
import LoginButton from '../components/LoginButton';

import { getTranslate } from 'react-localize-redux';

const mapStateToProps = state => ({
    loggedIn: state.loginState,
    translate: getTranslate(state.locale)
});

const mapDispatchToProps = dispatch => {
    return {
        onLoginAnswer: answer => { dispatch(setLogin(answer)) },
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginButton)

export default LoginContainer

