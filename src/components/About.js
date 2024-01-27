import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <User name={"Sarvesh Gupta"} />
        <UserClass name={"Sarvesh Gupta"} location={"Mumbai"}/>
      </div>
    );
};

export default About;