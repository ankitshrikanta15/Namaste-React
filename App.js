{
  /* 
  <div id="parents"> //object
    <div id="child">  //object
      <h1>Hello im h1</h1> //children
      <h2>Hello im h2</h2> //children
    </div>
    <div id="child2">  //object
      <h1>Hello im h1</h1> //children
      <h2>Hello im h2</h2> //children
    </div>
  </div> 
*/
}

const parent = React.createElement(
  //ReactElement(object) => HTML(Browser Understnd)
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "children" }, //if you want to give more than one children then you have to conver the h1, h2 tag into an array
      [
        React.createElement("h1", {}, "Hello I'm h1"),
        React.createElement("h2", {}, "Hello I'm h2"),
      ]
    ),
    React.createElement(
      "div",
      { id: "children2" }, //if you want to give more than one children then you have to conver the h1, h2 tag into an array
      [
        React.createElement("h1", {}, "Hello I'm h1"),
        React.createElement("h2", {}, "Hello I'm h2"),
      ]
    ),
  ]
);

//JSX - It will make out life easy while writing react code and its not the only option to write react code.

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//--------------------------------------------
// const heading = React.createElement(
//   "h1", //object
//   {
//     id: "heading", //props, keys, etc
//     xyz: "abc",
//   },
//   "Hello World from reactJS!!" // children
// );

// console.log(heading); // this will return you a Object to you.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

// root.render(heading);

//the render take the heading Object and create the h1 tag which the browser understands and put that tag inside the "root" element
