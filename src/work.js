import React from 'react'

function Work(props){
    return(
        <div>
        <h1><strong><i><u>Assignment#3 ToDo List</u></i> </strong></h1>
        <hr/>             
        <h3>1:  Create a React App</h3>
        <hr/>
        <h3>2:  Add this Reeact App to GitHub Repository using CLI</h3>
        <hr/>
        <h3>3:  Create a child component using props and relate it to parent component in App.js</h3>
        <hr/>
        <h3>4:  Create GitHub WorkFlow for this app to upload it on Surge</h3>
        <hr/>
        <h3>5:  Report surge URL and {props.GitHub} URL to  {props.TutorName} repository as an issue</h3>
        </div>
    );
}
export default Work;