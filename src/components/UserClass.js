import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo : {
            name : "user",
            location : "user", 
            bio : "user",
            company : "user",
            avatar_url : "http://dummy-photo.com"
        }
    };
  }

  async componentDidMount(){
    // API call

    const data = await fetch("https://api.github.com/users/Sarvesh64");
    const json = await data.json();

    this.setState({userInfo:json});
    console.log(json);
  }

  render() {
    //const { name, location } = this.props;
    const { name, location, bio, company } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/19759875?v=4" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Skills : {bio}</h3>
        <h3>Company : {company}</h3>
        <h4>Contact : guptasarvesh6417@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
