import React from 'react'
import { connect } from 'react-redux'
import { addImage } from '../actions'
import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

let AddImage = ({ dispatch }) => {
  let tag, description, date, location, src;

  return (
    <div className="AddImageForm">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!tag.value.trim() || !description.value.trim() || !date.value.trim() || !location.value.trim() || !src.value.trim()) {
            return
          }
          dispatch(addImage(tag.value, description.value,  date.value, location.value, location.value))
            tag.value = ''; description.value="";
        }}
      >
        <div className = "FieldDescription">Tag</div>
        <input ref={node => {tag = node}}/>
        <div className = "FieldDescription">Description</div>
        <input ref={node => {description = node}}/>
        <div className = "FieldDescription">Date</div>
        <DatePicker ref={node => {date = node}} hintText="Portrait Dialog" />
        <div className = "FieldDescription">Location</div>
        <input ref={node => {location = node}}/>
        <div className = "FieldDescription">Image URL</div>
        <input ref={node => {src = node}}/>


        <RaisedButton type="submit" label="Add Image" icon={<CircleIcon  />} />

      </form>
    </div>
  )
}
AddImage = connect()(AddImage)

export default AddImage