import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// React.createElement => Object => HTML(while render into DOM it become html doc.)

const heading = React.createElement("h1", {id: "heading"}, "Namsate React🚀");
console.log(heading);


//JSX - is not HTML in JS but it is similar to HTML/XML like syntax.

//JSX (transpiled before it reaches the JS engine by Parcel) - Parcel is just manager, parcel give the responsibility to a package called Babel to transpile the JSX into JS.

//JSX => Babel transpiled it to=> React.createElement() => Js Object => HTML Element (render)  

const jsxHeading = <h1 id="heading" className="heading2">Namasate React using JSX</h1>
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

root.render(jsxHeading);

// React Component - 2 types

// Class Based Component (old)
// functional Component (new)

// React functional Component
const HeadingComponent = () => {
  return <h1 className="heading">Namsate React from Functional component</h1>
}
// or
const HeadingComponent2 = () => (
  <div id="container">
  <h1 className="Heading2"> Namsate React from Functional component 2</h1>
  </div>
)
// above both are same but in functional component 2 we can write in single line

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(<HeadingComponent2 />); 