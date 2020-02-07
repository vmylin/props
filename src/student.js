import React from "react"

export function Student(props) {
    // first add a parameter to function component
    // parameter can be anything (but convention is to name props)
    // to receive value, it has to be props.(value) | it's like jQuery API
    return(
        <div>
            <h1>{props.name}</h1>
            <ul>
            <li>{props.physics}</li>
            <li>{props.chemistry}</li>
            <li>{props.biology}</li>
            </ul>
        </div>
    );
}

export default Student;