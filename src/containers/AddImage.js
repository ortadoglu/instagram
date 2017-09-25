import React from 'react'
import { connect } from 'react-redux'
import { addImage } from '../actions'
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

let AddImage = ({ dispatch }) => {
  let tag, description, date, location, src;
  let maxDate = new Date();

  return (
    <div className="AddImageForm">
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addImage(tag, description, date, location, src))
        }}
      >
        <TextField className="InputField" onChange={(e) => {tag = e.target.value}}
            floatingLabelText="Tag" required />        
        <TextField className="InputField" onChange={(e) => {description = e.target.value}}
            floatingLabelText="Description"  required />
        <DatePicker className="InputField" maxDate={maxDate} onChange={(e, data) => {date = data}} 
            floatingLabelText="Date" required />
        <TextField className="InputField" onChange={(e) => {location = e.target.value}}
            floatingLabelText="Location" required />     
        <TextField  className="InputField" onChange={(e) => {src = e.target.value}}
            floatingLabelText="Image URL" required />               
        <RaisedButton className="FormSubmitButton" type="submit" label="Add Image" icon={<CircleIcon  />} /> 

      </form>
    </div>
  )
}
AddImage = connect()(AddImage)

export default AddImage