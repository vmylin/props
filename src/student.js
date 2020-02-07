import React from "react"

export function Student(props) {
    // first add a parameter to function component
    // parameter can be anything
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