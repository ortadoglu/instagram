import React from 'react'
import { connect } from 'react-redux'
import { addImage } from '../actions'
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import { getTranslate } from 'react-localize-redux';

//this must be refactored... extract components!!!!

let AddImage = ({ dispatch, translate, currentLanguage }) => {
  let tag, description, date, location, src;
  let maxDate = new Date();

  return (
    <div className="AddImageForm">
        <form
            onSubmit={e => {
            e.preventDefault()
            dispatch(addImage(tag, description, date, location, src, false, [], 5))
            }}
            >
            <TextField className="InputField" onChange={(e) => {tag = e.target.value}}
                floatingLabelText={ translate('tag') } required />        
            <TextField className="InputField" onChange={(e) => {description = e.target.value}}
                floatingLabelText={ translate('description') }  required />
            <DatePicker className="InputField" maxDate={maxDate} onChange={(e, data) => {date = data}} 
                floatingLabelText={ translate('date') } required />
            <TextField className="InputField" onChange={(e) => {location = e.target.value}}
                floatingLabelText={ translate('location') } required />     
            <TextField  className="InputField" onChange={(e) => {src = e.target.value}}
                floatingLabelText={ translate('Image_Url') } required />               
            <RaisedButton className="FormSubmitButton" type="submit" label={ translate('add_image')} icon={<CircleIcon  />} /> 

        </form>
    </div>
  )
}
const mapStateToProps = state => ({
    translate: getTranslate(state.locale)
});

AddImage = connect(mapStateToProps)(AddImage)

export default AddImage