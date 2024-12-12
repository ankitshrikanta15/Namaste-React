import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
    
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
    //API call
    
  }

  render() {
    // console.log("Parent Render");
    
    return (
      <div>
      <h1>About</h1>
      <p>This is Namaste React Web Series</p>
      <UserClass name={"First"} location={"Odisha"} contact={"@ankitshrikanta"}/>
    </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>This is Namaste React Web Series</p>
//       <User name={"Ankit Patel (Functional)"}/>

//       <UserClass name={"Ankit Patel (Class)"} location={"Odisha Class"} contact={"@ankitshrikanta Class"}/>
//     </div>
//   );
// };

export default About;