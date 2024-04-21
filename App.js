import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"This is Namaste React 🚀"), React.createElement("h2",{},"gvdasgfasfbgfffg")
    ),React.createElement(
        "div",
        {id:"child2"},
        React.createElement("h1",{},"I'm an H1 tag"), React.createElement("h2",{},"I'm an H2 tag")
    )]
    );





const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello World from react"
);
// console.log(heading);//object
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// root.render(heading);


//here root.render function taking heading obj convertiong h1 tag and put into dom .