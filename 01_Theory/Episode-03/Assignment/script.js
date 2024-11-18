import React from "react";
import ReactDOM from "react-dom/client";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const heading = React.createElement("div", {className: "title"}, [React.createElement("h1", {}, "I'm H1"), React.createElement("h2", {}, "I'm H2"), React.createElement("h3", {}, "I'm H3")]);

// Create the same element using JSX


 const JsxHeading = () => (
 <div className="title">
  <h1>Hello</h1>
  <h2>Hello</h2>
  <h3>Hello</h3>
 </div>
);

//  Create a functional component of the same with JSX

const TitleComponent = () => (
<div className="container">
    <h1>THis is Title Component</h1>
    <JsxHeading />
    <JsxHeading></JsxHeading>
    {JsxHeading()}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponent />);