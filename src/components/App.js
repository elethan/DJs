import React from 'react';
import base from '../base';
import GCalendar from './GCalendar';
import Location from './Location';
import AddLocationForm from './AddLocationForm'

class App extends React.Component {

constructor() {

        super();
        // to make 'this' of each method equal to App object 'this'
        this.addLocation = this.addLocation.bind(this);
 //       this.loadSamples = this.loadSamples.bind(this);

         // initialize state
        this.state={
            locations:[],
            newlocationKey:''
              };
}

componentWillMount() {
// this runs right before <App> is rendered
    this.ref = base.syncState(`/locations`, {
        context: this,
        state: 'locations'
    });

}

componentWillUnmount() {
    base.removeBinding(this.ref);
}


addLocation(location){
var AvailableRef = base.push('locations',{data:location})
  //available immediately, you don't have to wait for the Promise to resolve

 this.setState({newlocationKey:AvailableRef.key});
}

/*
loadSamples() {
   this.setState({fishes:sampleFishes});
    }
*/


render(){
return(
    <div className="djshelters-dash">
   <img src="https://firebasestorage.googleapis.com/v0/b/catch-of-the-day-thanos.appspot.com/o/logo22.jpg?alt=media&token=609618ab-cea1-4234-a16d-ce939a24adb0"/>
              {
                  Object
                  .keys(this.state.locations)
                    .map(key => <Location key={key} index={key}
                          details={this.state.locations[key]}
                    />)
               }
               {
                  Object
                  .keys(this.state.locations)
                   .map(key => <GCalendar key={key} index={key}
                          details={this.state.locations[key]}
                    />)
                }
  <AddLocationForm  addLocation={this.addLocation}/>
            </div>
        )
}
}

App.propTypes={
    params: React.PropTypes.object.isRequired
}
export default App;
