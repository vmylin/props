// import React from "react";
// import Student from "./Student";
// import "./App.css";

// function App() {
//   return <Student name="John" physics="75" chemistry="71" biology="78" />;
// }

// // to pass name, physics, chemistry & biology from App component to student component and render name, physics, chemistry and biology in browser
// // specify them as attribute
// // specify name property, add name attribute, and assign value John
// export default App;

//========================

// RENDER ARRAY IN CHILD COMPONENT USING FOR LOOP

// import React from "react";
// import Student from "./Student";
// import "./App.css";

// function App(){
//   return <Student name="John" marks={[70,75,79,81,80]} />;
// }

// export default App;

//=====================

// RENDER UNKNOWN CONTENT

// import React from "react";
// import Student from "./Student";

// function App() {
//   return(
//     <Student name="John">
//       <p>
//         John is primarily a person enrolled in a school or other educational institution.
//       </p>
//     </Student>
//   );
// }
// // specify content between opening & closing tag of parent component
// export default App;

import React from "react";
import Student from "./Student";
import ReactDOM from "react-dom";

var names = ['John', 'Alice', 'Mark'];

function userName(name) {
  names = names.filter(item => item !== name)
  ReactDOM.render(<App />, document.getElementById("root"));
}
// function userName used js method to remove item from array
// parent component provides a child with a function

export default function App() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={name}>
          <Student index={index} name={name} userCallback={username} />
        </li>
      ))}
    </ul>
  )
}