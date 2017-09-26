import { connect } from 'react-redux';
import LanguageDropdown from '../components/LanguageDropdown';
import { setActiveLanguage, getLanguages } from 'react-localize-redux';

const mapStateToProps = state => ({ languages: getLanguages(state.locale) });
const mapDispatchToProps =  dispatch => {
    return { onLanguageClick: id => { dispatch(setActiveLanguage(id)) }}
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown);


  
