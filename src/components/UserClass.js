import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "Default",
      }
    };
    // console.log(this.props.name + " Child Constructor");
    
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ankitshrikanta15");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })

    // console.log(json);
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count || this.state.count !== prevState.count2) {
      //code write here
    }
    // if (this.state.count !== prevState.count2) {
      //code
    // }
  }

  render() {
    // console.log(this.props.name + " Child Render");
    
    // const { name, location, contact } = this.props; //destructing
    const { name, login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {login}</h2>
      </div>
    );
  }
}

export default UserClass;
