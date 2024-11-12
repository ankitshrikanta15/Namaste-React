const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Worls! from React"
);
//here createElement we will take three arguments
//1. type of the element (tag name)
//2. properties of the element (attributes)
//3. children of the element (content)

// const root = ReactDOM.createRoot(document.querySelector(".root"));
//here createRoot is used to create the root element of the React application

// root.render(heading);
//here render is used to render the React element to the DOM
//render take the heading Object and create the h1 tag which the browser understands and put that h1 tag inside the div with class root

//nested html create this structure in react

//  <div id="parent">
//   <div id="child">
//     <h1>Hello World!</h1>
//   </div>
//   <div id="child2">
//     <h1>Hello World! child2</h1>
//   </div>
//  </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "Im an another h1 tag"),
    React.createElement("h2", {}, "Im an another h2 tag")]
  )]
);

const root1 = ReactDOM.createRoot(document.querySelector(".root"));
root1.render(parent);

