// import React from "react"

// export function Student(props) {
//     // first add a parameter to function component
//     // parameter can be anything (but convention is to name props)
//     // to receive value, it has to be props.(value) | it's like jQuery API
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <ul>
//             <li>{props.physics}</li>
//             <li>{props.chemistry}</li>
//             <li>{props.biology}</li>
//             </ul>
//         </div>
//     );
// }

// export default Student;
//*************** */

// receive data in class component
// use "this" keyword as shown

// import React, {Component} from "react";

// class Student extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <ul>
//                     <li>{this.props.physics}</li>
//                     <li>{this.props.chemistry}</li>
//                     <li>{this.props.biology}</li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Student;

//========================

// // COMBINING JS & PROPS TO RENDER CONTENT

// // component can use JS if/else statement 
// // render different content based on different conditions

// import React from "react";

// export function Student(props) {
//     if(props.physics > 60 && props.chemistry > 60 && props.biology > 60) {
//         return <h2>Grade A</h2>;

//     } else {
//         return <h2>Grade B</h2>
//     }
// }

// export default Student;

//========================

// RENDER ARRAY IN CHILD COMPONENT USING FOR LOOP

// import React from "react";

// function marksList(marks) {
//     let arrayElems= [];
//     for(let i=0;i<marks.length;i++) {
//         arrayElems.push(<li>{`${mark[i]}`}</li>)
//         // marksList function uses JS for loop to list all items and put them in <li> 
//     }
//     return arrayElems;
// }

// export function Student(props) {
//     return <ul>{marksList(props.marks)}</ul>;
// }
// export default Student

//======================

// RENDERING AN ARRAY IN CHILD COMPONENT USING MAP METHOD

// import React from "react";

// export function Student(props) {
//     return (
//         <ul>
//             {props.marks.map(mark => (
//                 // use map method to transform objects in an array into HTML elements
//                 <li key={mark}>{`${mark}`}</li>
//             ))}
//         </ul>
//     );
// }

// export default Student;

//===================

//  RENDER UNKNOWN CONTENT

// import React from "react";

// export function Student(props) {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.children}</p>
//         </div>
//     );
// }

// // want to render unknown content
// // retrieve using reserved children property in props object.
// export default Student;

// import React from "react";

// export function Student(props) {
//     return(
//         <React.Fragment>
//             <span>{props.name}</span>
//             <span>
//                 <button onClick={() => props.userCallback(props.name)}>
//                     Click Here
//                 </button>
//             </span>
//         </React.Fragment>
//     )
// }
// // userName function is provided to Student component as value for a prop named userCallback
// // onClick expression is arrow function that calls function prop when it is invoked

//===================

// PASSING PROPS WITH SPREAD

import React from "react";
import Marks from "./Marks";

export function Student(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <Marks {...props} />
        </div>
    );
}

export default Student;
// the {...props} expression passes on all of props received from parent component.