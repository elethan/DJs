import React from 'react';


class Location extends React.Component {
    render(){
        const {details, index} = this.props
        const isAvailable= details.status === 'Clinical'
        const interlocksPassed = details.interlocks === 'Passed'

        const statusText = isAvailable ? 'Operational' : 'Service!';
        const interlocksText = interlocksPassed ? 'Passed': 'Failed!'

       return(
       
        <div className="location">
            <n>{details.name}</n>
            <j>JIRA log  {details.jiraNo} </j>
             <j>System Status</j>
         <button disabled={!isAvailable}>{statusText}</button>
         <j>Interlock checks on {details.interlocksDate}</j>
         <button disabled={!interlocksPassed}>{interlocksText}</button>
         <textarea>{details.desc}</textarea>
        
        </div>
     
        )
    }
}

Location.propTypes={
    details: React.PropTypes.object.isRequired,
    index: React.PropTypes.string.isRequired,
}
export default Location;