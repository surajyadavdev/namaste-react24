import React from "react";
    
class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:1,
        };
        console.log("Child Constructor");
    }

    componentDidMount(){
      console.log("Child Component DidMount");
    }
    render(){
      const {name,location} = this.props;
      const {count,count2} = this.state;

      console.log("Child Render");
      return(
          <div className="user-card">
            <h1>Count: {count}</h1>
            {/* Never Upadate state variable directly */}
            <button 
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
                </button>
                <h1>Count2:{count2}</h1>
                <h2>{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@surajyadavEngineer</h4>
            </div>
        );
    };
};

export default UserClass;