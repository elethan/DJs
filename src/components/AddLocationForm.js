
import React from 'react';

class AddLocationForm extends React.Component {

createLocation(event) {
    event.preventDefault();
    console.log('Adding new location.');
const location = {
    name: this.name.value,
    status: this.status.value,
    dash:this.dash.value,
    desc: this.desc.value,
    image: this.image.value,
    calendar: this.calendar.value,
    interlocks: this.interlocks.value
}

this.props.addLocation(location);
this.locationform.reset();       
}

render() {
    return (
    <form ref={(input)=>{this.locationform=input}} 
    className="location-edit" onSubmit={(e) => this.createLocation(e)}>
    <select ref={(input)=>{this.dash=input}} >
            <option value="D">D Shelter</option>
            <option value="J">J Shelter</option>
        </select>
        <input ref={(input)=>{this.name=input}} type="text" placeholder="Location Name" />
        <textarea ref={(input)=>{this.calendar=input}} placeholder="Calendar ID" ></textarea>
        <textarea ref={(input)=>{this.desc=input}} placeholder="Location Notes"></textarea>
        <select ref={(input)=>{this.status=input}} >
            <option value="Clinical">Clinical</option>
            <option value="Service">Service work</option>
        </select>
        <select ref={(input)=>{this.interlocks=input}} >
            <option value="Passed">Interlocks Passed</option>
            <option value="Failed">Interlocks Failed</option>
        </select>
        <input ref={(input)=>{this.image=input}} type="text" placeholder="Location image" />
        <button type="submit">+ Add Location</button>
    </form>
        )
    }
}

AddLocationForm.propTypes ={
    addLocation: React.PropTypes.func.isRequired
}

export default AddLocationForm;