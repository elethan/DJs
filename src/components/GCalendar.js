import React from 'react';
import 'whatwg-fetch'
import moment from  'moment'
import BigCalendar from 'react-big-calendar'
import '../css/react-big-calendar.css'

moment.locale('en-GB');
// a localizer for BigCalendar
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
let formats = {
    agendaDateFormat: (date, culture, localizer) =>
    localizer.format(date, 'dd DD MMM', culture),
}

class GCalendar extends React.Component {
       constructor() {
        super();
        this.state={
            events: []
            }
      }

componentDidMount(){

const {details} = this.props
const API_KEY = 'AIzaSyAi6x7ZreeWNvUSGYl08iUOtirgDJ__e9k'

var MinDate = new Date();
MinDate= MinDate.toISOString(MinDate.setMonth(MinDate.getMonth()-1))

let url = `https://www.googleapis.com/calendar/v3/calendars/${details.calendar}/events?key=${API_KEY}`
url+="&timeMin=" + MinDate + "&singleEvents=true"

// if reading calendars from the node.js server
// let url = `http://localhost:3000/calendar/${details.name}`

     fetch(url)
       .then( (response) => {return response.json()})
         .then( (json) => {
     var events = json.items.reduce(function(result, event) {
        if (event.start !== undefined) {
            result.push({
                start: event.start.date || event.start.dateTime,
                end: event.end.date || event.end.dateTime,
                title: event.summary,
                })
                }
            return result;
            }, []);
    this.setState({events:events});
    })
}

render(){

    return(
      <BigCalendar
                    toolbar={false}
                    formats={formats}
                    defaultView="agenda"
                    events={this.state.events}
                    />
      )
    }
}

GCalendar.propTypes={
    details: React.PropTypes.object.isRequired,
 }

export default GCalendar;
