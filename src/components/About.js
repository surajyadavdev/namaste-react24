import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";

// we can do like this :-class About extends Component{
class About extends React.Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent Component DidMount");
  }

  render(){
    console.log("Parent Render");
    return(
        <div>
            <h1>About Class Component</h1>
            <h2>This Is Namaste React Webseries</h2>
            <UserClass name={"Akshay Saini (Classes)"} location={"Jaipur"}/>
        </div>
    );
  }
}

// const About = ()=>{
//   return(
//     <div>
//       <h1>About</h1>
//       <h2>This Is Namaste React Webseries</h2>
//       <User name={"Akshay Saini (function)"}/>

//       <UserClass name={"Akshay Saini (Classes)"} location={"Jaipur"}/>
//     </div>
//   );
// };

export default About;