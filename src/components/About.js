import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";
// we can do like this :-class About extends Component{
class About extends React.Component{
  constructor(props){
    super(props);

    this.state={
      userinfo:{
        name:"dummy",
        location:"Default"
      },
    };
    
  }
  async componentDidMount(){
    // console.log("Parent Component DidMount");
    // Api call
    const data = await fetch("https://api.github.com/users/surajyadavdev");
    const json = await data.json();

    this.setState({
      userInfo:json,
    });
    console.log(json);

  }


  render(){
    // console.log("Parent Render");
    return(
        <div>
            <h1>About Class Component</h1>
            <div>
              LoggedIn User
              <UserContext.Consumer>
                {/* {(data)=>console.log("data:",data)} */}
                {({loggedInUser}) =><h1>{loggedInUser}</h1>}
              </UserContext.Consumer>
            </div>
            <h2>This Is Namaste React Webseries</h2>
            
            <UserClass name={"First"} location={"Jaipur"}/>
            {/* <UserClass name={"Elon Musk (Classes)"} location={"Nevada"}/> */}

        </div>
    );
  }
}
/*
Parent Constructor 
-Parent Render
  Akshay Constructer
  AkshaY Render
  Akshay ComponenetDidMount

  Elon Constructer
  Elon Render
  Elon ComponenetDidMount
-Parent ComponentDidMount

*/

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