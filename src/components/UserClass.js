import React from "react";
    
class UserClass extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     count:0,
        //     count2:1,
        // };
        console.log(this.props.name + "Child Constructor");
        this.state={
          userInfo:{
            name:"dummy",
            location:"Default",
            avatar_url: "https://avatars.githubusercontent.com/u/106859895?v=4"
          },
        };
    }

  async componentDidMount(){
      // Api call 
        //  console.log(this.props.name +"Child Component DidMount");
    // Api call
    const data = await fetch("https://api.github.com/users/surajyadavdev");
    const json = await data.json();

    this.setState({
      userInfo:json,
    });
    console.log(json);
  }
    componentDidUpdate(){
      console.log("Componenet DidUpdate ");
    };
    render(){
      const {name,location} = this.props;
      const {count,count2} = this.state;

      console.log(this.props.name + "Child Render");
      return(
          <div className="user-card">
            {/* <h1>Count: {count}</h1> */}
            {/* Never Upadate state variable directly */}
            {/* <button 
               onClick={() =>{
                this.setState({
                  count:this.state.count + 1,
                  count2:this.state.count2 + 1,

                  });
                // this.setState({
                //   count2:this.state.count2 + 1,
                //   });
                }}
                >
                  Count Increase
                </button> */}
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name:{this.state.userInfo.login}</h2>
                <h3>Location:{this.state.userInfo.location}</h3>
                <h4>Contact:@surajyadavEngineer</h4>
            </div>
        );
    };
};

export default UserClass;
/* 
---Mounting Life Cycle
Constructor  Called (dummy data)
Render Componenet*(dummy data)
      <HTML Dummy >
Componenent Did Mount
      <Api Call>
      <this.setState> =>State variable is updated
----Update Cycle
      render(Api Data)
      <html (loaded with new apis data)
      Componenet DidUpdate







*/