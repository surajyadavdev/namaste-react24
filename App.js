import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  ==> Object ==> HTML Element (render)

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React 🚀");

// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading) 

//JSX 
//JSX (transpiled before it reaches the JS Engine )=>PARCEL =>Babel
//JSX ==>Babel transpiled it to React.CreateElement =>ReactElement -JS Object  ==> HTMLElement(render)


// const jsxHeading = <h1 className="head" tabIndex = "1">Namaste React  Using JSX🚀</h1>;
const jsxHeading = (<h1 className="head" tabIndex = "1">
    Namaste React  Using JSX🚀
    </h1>);
console.log(jsxHeading);


//React Component 
//Functional Componenet -New Way

const HeadingComponent1 = () => {
    return <h1 className="heading">Namaste React Functional Componenet1</h1>
};
// insort we can write it 
// const HeadingComponent = () =><h1 className="heading">Namaste React Functional Component</h1>;


// Componenet Composition 
const Title = function(){
    return (<h1 className="head" tabIndex="5">
        Namaste React Using JSX 🚀
    </h1>
)
};
const number = 1000;
const HeadingComponent = () =>(
    <div id="container">
        {/* <Title/> */}
        {jsxHeading}
        <h2>{number}</h2>
        {HeadingComponent1()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)

