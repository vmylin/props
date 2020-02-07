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

import React from "react";
import Student from "./Student";

function App() {
  return(
    <Student name="John">
      <p>
        John is primarily a person enrolled in a school or other educational institution.
      </p>
    </Student>
  );
}
// specify content between opening & closing tag of parent component
export default App;