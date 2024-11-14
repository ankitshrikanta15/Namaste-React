import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namasate React using JSX. 🚀
  </h1>
);

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="Heading2"> Namsate React from Functional component 2</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
 